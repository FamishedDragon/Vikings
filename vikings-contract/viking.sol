// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract Viking is ERC721Enumerable, Ownable {

    using Strings for uint256;

    string _baseTokenURI;
    uint256 private _reserved = 150;
    uint256 private _price = 0 ether;
    bool public _paused = true;
    uint private _maximumViking = 1111;
    uint256 private _maxMintAmount = 15;

    // Developer addresses
    address dev1 = 0x41489AC775dd52bD5Bc616149aB93e371E9D3687; // Ragnar
    address dev2 = 0x307128644fd1B16e1d22703E4A7B67315f470bB6; // Kobold

    // Lets go to war
    constructor(string memory baseURI) ERC721("Warriors Of Ether Viking", "VIK")  {
        setBaseURI(baseURI);

        // dev team gets the first 5 vikings
        _safeMint( dev1, 0);
        _safeMint( dev2, 1);
    }

    function adopt(uint256 num) public payable {
        uint256 supply = totalSupply();
        require( !_paused,                                 "Sale paused" );
        require( num <= _maxMintAmount,                    "Exceeds maximum number of vikings you can recruit" );
        require( supply + num < _maximumViking - _reserved,"Exceeds maximum Viking supply" );
        require( msg.value >= _price * num,                "Ether quantity sent is not correct" );

        for(uint256 i; i < num; i++){
            _safeMint( msg.sender, supply + i );
        }
    }

    function walletOfOwner(address _owner) public view returns(uint256[] memory) {
        uint256 tokenCount = balanceOf(_owner);

        uint256[] memory tokensId = new uint256[](tokenCount);
        for(uint256 i; i < tokenCount; i++){
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokensId;
    }

    // Just in case Eth does some crazy stuff
    function setPrice(uint256 _newPrice) public onlyOwner() {
        _price = _newPrice;
    }

    // Increase max after Whitelist sale
    function setMaxMint(uint256 _newMax) public onlyOwner() {
        _maxMintAmount = _newMax;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    function getPrice() public view returns (uint256){
        return _price;
    }

    function giveAway(address _to, uint256 _amount) external onlyOwner() {
        require( _amount <= _reserved, "Exceeds reserved Viking supply" );

        uint256 supply = totalSupply();
        for(uint256 i; i < _amount; i++){
            _safeMint( _to, supply + i );
        }

        _reserved -= _amount;
    }

    function pause(bool val) public onlyOwner {
        _paused = val;
    }

    function withdrawAll() public payable onlyOwner {
        uint256 _each = address(this).balance / 2;
        require(payable(dev1).send(_each));
        require(payable(dev2).send(_each));
    }
}