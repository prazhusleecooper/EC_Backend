/**
 * Ecom.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true,
      allowNull: false
    },
    img: {
      type: 'json',
      columnType: 'array',
      allowNull: false,
      defaultsTo: [
        'https://www.flagsimporter.com/pub/media/wysiwyg/content-media/orange.jpg',
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhISFRUPEhYVFRUVFRUVDxAPFRUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFg8PGC0ZFR03Nzg3LS8rLSstKystKysrNysrKysrKysrKysrLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIGBP/EACUQAQEBAAEBCAMBAQAAAAAAAAABEQJxEjFRYYGRscEh0fChQf/EABkBAQEBAQEBAAAAAAAAAAAAAAABBAUCA//EABoRAQEBAQEBAQAAAAAAAAAAAAABETFBURL/2gAMAwEAAhEDEQA/AOj5W7U7VOV/LOuq4y9qp2qckqDUtJb4/LJRGt6px5dUhihaagIuna800Be1fE7V8UAXtXxq9usoDc5Xz7vE7V8/difSwGu0Tl1ZpAavLzvukvX3JAFt6rLfGoYCyrrOERWpeq9pmKeVfY7zRMGBtcHWVvejoMJyKUt6f6AkEDWtSiCEL6hoLKmnuLgfRqaWoLoi6oQlTVECCwwDiaIq4srOANSEQBqHFIsieV6nY70EYGxwXO9O9NKns6DEu/DNNKIYmBQDP9AFQVRIaGgammmiFrSVAXSESUFIQBSBCjWJDVRSKgCw4pFS8qzsd7ouIwNzgrWGuVS10GFChaIah7LoIKihVEKAJoLKACaSLgIQImgpoaBq70RdAtWVEiVV1ZUWAqxKqXlWdd7+BMGBtcFe/wBWa1y+0dBiS0/KpRBCrQZwjXsi6LIZ5JKAYkjSZ8gYBKB/f8RdSf35EXCpF0CKigFIlopFwKC3qRIqYNYM/wB3Lvwl5VnY70BgbXBc6nq1y7/ViugxKlpaEBKQVCAQBUNAQ00FCJKBTiiygVcRRCUiRaAuM2r7irYYkvytoEXEXeoKqQebyrOx3oaMDc4Pl9sftrky6DCCe4sKBTBCmlqb5guovqkgAsQCUlPUA0hgCT0MahAT9eJi0oCpigi4E+AMUq4gRcTDUvKs7HfaIMDc4Hkla5Ma6LCLT390wDOqWdVBAgAlp2gARTQKkooCaLgBDCgtCpQUiLAKoAomKmAqLIl5VnY77Ea1GBucDyYs6t8vtLXQYWcKtKsKIqUQpaAJSxcgCQz5VN+QTDGsICYpicQNFAIBACEMBYikgCgCyLiSLxjzeVZ2O8GsRgbnAWFXmy6DCJVKqJoAJFSAKVF0Eis6WgtoAEWVAFEkUAVAJTRAa0qRQXWqyqC4JiypeVZ2O8waGBt1wHPvTF5d/qjoMQhyKuhiKYIlhi2IBQxZxBmTyMWUgJFACIshQIEqggtAQUgH6IiwFjTKgRUixLyrOx3uo1qOe2uB5z8+qSN8p8sx0GJMKuFhCsz5RrEqoVFiT7BU7lTAFFwExMUsBMUIAi4gKCApTSARqRm+qyguGGroI1E3zWPN5VnY7sUYG5wfLvTGrPll0GISrEwRazGkgiAYomEUBMWACVaAJiwi0GRcMACGAlixcAJCKcQDCNAy1/f4mLXm8qzsd0AwNzhuTONcomN2xjxLEawXYmVkWww2GVkaxDYmVEakSRdhlRLW7xZw2Jl+LUXDF0y/DAxcNMvxnFiobFymLOiYtibDKiyEiyH6hlReMISH6hlMWQhYmwyrYELC2Ysl2O5DBgbcpEqj08IoCQAR6Qqi1EFASAAixQqJQAAEUKoCKAAAAADNBYnse0B82p//2Q==',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEXor7WSH1vnAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'
      ]
    },
    price: {
      type: 'string',
      allowNull: false
    },
    uid: {
      type: 'number',
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    description: {
      type: 'string',
      required: true,
      allowNull: false
    },
    category: {
      type: 'string',
      required: true,
      allowNull: false
    },
    quantity: {
      type: 'number',
      allowNull: false
    },
    total_price: {
      type: 'number',
      allowNull: false
    },
    totalQuantity: {
      type: 'number',
      required: true,
      allowNull: false
    },
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

