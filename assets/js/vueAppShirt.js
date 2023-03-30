let href = new URL(window.location.href);
let sParams = new URLSearchParams(href.search);
var folder = sParams.get('fabric')


console.log(href)
console.log(sParams);
console.log(folder)
var app = new Vue({
  el: '#app',
  data: {

    modelhead: 'imge/Shirt_Front/Maniquin/head.png',
    backpleat: '',
    backpleatpicked: '',
    modelBhead: 'imge/Shirt_Back/2.shirt-collar/2.shirt-collar-102.png',
    collarbutton: '',
    collarbuttonhole: '',
    collarbuttonthread: '',
    modelpant: 'imge/Shirt_Front/Maniquin/pant/head-101.png',
    modelBpant: 'imge/Shirt_Back/Maniquin Smart Shirt.png',
    customcollar: '',

    collar:
      'imge/Shirt_Front/2.shirt-collar/shirt-collar_button-down/shirt-collar_button-down-102.png',
    ffcuff: '',
    ffcuffb: '',
    cuff: 'imge/Shirt_Front/4.shirt-cuff/shirt-cuff_double-button_angled/shirt-cuff_double-button_angled-102.png',

    shirtfullfit: '',
    shirtSfullfit: '',
    shirtBfullfit: '',
    shirtfit:
      'imge/Shirt_Front/1.shirt-fitting/shirt-fitting_regular-fit/shirt-fitting_regular-fit-102.png',
    shirtBfit:
      'imge/Shirt_Back/1.shirt-fitting/shirt-fitting_regular-fit/shirt-fitting_regular-fit-102.png',
    sleeve: '',
    bsleeve: '',
    elbowpatch: '',
    tuck: '',
    placket: '',
    ffplacket: '',
    chestpocket:
      'imge/Shirt_Front/3.shirt-pocket/shirt-pocket_angle-corner_1-pocket/shirt-pocket_angle-corner_1-pocket-102.png',
    chestpocketbutton: '',
    chestpocketbuttonthread: '',
    shirtbutton:
      'imge/Shirt_Front/5.shirt-placket/shirt-placket_french-front/shirt-button/shirt-button-101.png',
    ffshirtbutton: '',
    ffshirtbuttonhole: '',
    ffshirtbuttonthread: '',
    shirtbuttonhole:
      'imge/Shirt_Front/5.shirt-placket/shirt-placket_french-front/shirt-button-hole/shirt-button-hole-102.png',
    shirtbuttonthread:
      'imge/Shirt_Front/5.shirt-placket/shirt-placket_french-front/shirt-button-thread/shirt-button-thread-102.png',
    bcollar: '',
    bcuff:
      'imge/Shirt_Back/4.shirt-cuff/shirt-cuff_double-button_angled/shirt-cuff_double-button_angled-102.png',
    collarPicked: '',
    customcollarPicked: '',
    cuffPicked: '',
    customcuffPicked: '',
    sleevePicked: '',
    tuckPicked: '',
    chestpocketPicked: '',
    fitPicked: '',
    placketPicked: '',
    elbowpatchPicked: '',
    backpleatPicked: '',

    // side variant


    modelShead: 'imge/Shirt_Side/1.shirt-fitting/Maniquin/head.png',
    collars: 'imge/Shirt_Side/2.shirt-collar/shirt-collar_button-down/shirt-collar_button-down-102.png',

    collarSbutton: '',
    collarSbuttonhole: '',
    collarSbuttonthread: '',
    customScollar: '',
    S_sleeve: '',

    shirtSfit: 'imge/Shirt_Side/1.shirt-fitting/shirt-fitting_regular-fit/shirt-fitting_regular-fit-102.png',
    cuffs: 'imge/Shirt_Side/4.shirt-cuff/shirt-cuff_double-button_rounded/shirt-cuff_double-button_rounded-102.png',
    ffcuffs: '',
    chestSpocket: 'imge/shirt_Side/3.shirt-pocket/shirt-pocket_angle-corner_1-pocket/shirt-pocket_angle-corner_1-pocket-102.png',
    chestpocketSbutton: '',
    chestpocketSbuttonthread: '',

    S_placket: '',
    S_ffplacket: '',
    ffshirtSbutton: '',
    ffshirtSbuttonhole: '',
    ffshirtSbuttonthread: '',
    shirtSbutton: 'imge/Shirt_Side/5.shirt-placket/shirt-placket_french-front/shirt-button/shirt-button-101.png',
    shirtSbuttonhole: 'imge/Shirt_Side/5.shirt-placket/shirt-placket_french-front/shirt-button-hole/shirt-button-hole-102.png',
    shirtbuttonSthread: 'imge/Shirt_Side/5.shirt-placket/shirt-placket_french-front/shirt-button-thread/shirt-button-thread-102.png',
    modelSpant: 'imge/Shirt_Side/1.shirt-fitting/Maniquin/Pant.png',
    //end side variants


    collarvariants: [
      {
        variantId: 'cl1',
        variantType: 'Button Down',
        variantImage:
          '2.shirt-collar/shirt-collar_button-down/shirt-collar_button-down',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/05_shirt-collar_button-down-01.png',
        variantImageCB:
          '2.shirt-collar/shirt-collar_button-down/shirt-button/shirt-button.png',

        variantImageCBH:
          '2.shirt-collar/shirt-collar_button-down/shirt-button-hole/shirt-button-hole',
        variantImageCBT:
          '2.shirt-collar/shirt-collar_button-down/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cl2',
        variantType: 'Cutaway',
        variantImage:
          '2.shirt-collar/shirt-collar_cutaway/shirt-collar_cutaway',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/10_shirt-collar_cutaway-01.png',
        variantImageCB:
          '2.shirt-collar/shirt-collar_cutaway/shirt-button/shirt-button.png',
        variantImageCBH:
          '2.shirt-collar/shirt-collar_cutaway/shirt-button-hole/shirt-button-hole',
        variantImageCBT:
          '2.shirt-collar/shirt-collar_cutaway/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cl3',
        variantType: 'Mandarin',
        variantImage:
          '2.shirt-collar/shirt-collar_mandarin/shirt-collar_mandarin',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/11_shirt-collar_mandarin-01.png',
        variantImageCB:
          '2.shirt-collar/shirt-collar_mandarin/shirt-button/shirt-button.png',
        variantImageCBH:
          '2.shirt-collar/shirt-collar_mandarin/shirt-button-hole/shirt-button-hole',
        variantImageCBT:
          '2.shirt-collar/shirt-collar_mandarin/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cl4',
        variantType: 'Pinned',
        variantImage: '2.shirt-collar/shirt-collar_pinned/shirt-collar_pinned',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/06_shirt-collar_pinned-01.png',
        variantImageCB:
          '2.shirt-collar/shirt-collar_pinned/shirt-button/shirt-button.png',
        variantImageCBH:
          '2.shirt-collar/shirt-collar_pinned/shirt-button-hole/shirt-button-hole',
        variantImageCBT:
          '2.shirt-collar/shirt-collar_pinned/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cl5',
        variantType: 'Point',
        variantImage: '2.shirt-collar/shirt-collar_point/shirt-collar_point',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/04_shirt-collar_point-01.png',
        variantImageCB:
          '2.shirt-collar/shirt-collar_point/shirt-button/shirt-button.png',
        variantImageCBH:
          '2.shirt-collar/shirt-collar_point/shirt-button-hole/shirt-button-hole',
        variantImageCBT:
          '2.shirt-collar/shirt-collar_point/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cl6',
        variantType: 'Round',
        variantImage: '2.shirt-collar/shirt-collar_round/shirt-collar_round',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/09_shirt-collar_round-01.png',
        variantImageCB:
          '2.shirt-collar/shirt-collar_round/shirt-button/shirt-button.png',
        variantImageCBH:
          '2.shirt-collar/shirt-collar_round/shirt-button-hole/shirt-button-hole',
        variantImageCBT:
          '2.shirt-collar/shirt-collar_round/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cl7',
        variantType: 'Semi Spread',
        variantImage:
          '2.shirt-collar/shirt-collar_semi-spread/shirt-collar_semi-spread',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/08_shirt-collar_semi-spread-01.png',
        variantImageCB:
          '2.shirt-collar/shirt-collar_semi-spread/shirt-button/shirt-button.png',
        variantImageCBH:
          '2.shirt-collar/shirt-collar_semi-spread/shirt-button-hole/shirt-button-hole',
        variantImageCBT:
          '2.shirt-collar/shirt-collar_semi-spread/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cl8',
        variantType: 'Spread',
        variantImage: '2.shirt-collar/shirt-collar_spread/shirt-collar_spread',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/07_shirt-collar_spread-01.png',
        variantImageCB:
          '2.shirt-collar/shirt-collar_spread/shirt-button/shirt-button.png',
        variantImageCBH:
          '2.shirt-collar/shirt-collar_spread/shirt-button-hole/shirt-button-hole',
        variantImageCBT:
          '2.shirt-collar/shirt-collar_spread/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cl9',
        variantType: 'Wing',
        variantImage: '2.shirt-collar/shirt-collar_wing/shirt-collar_wing',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/02 Shirt-COLLARs_Final/12_shirt-collar_wing-01.png',
        variantImageCB:
          '2.shirt-collar/shirt-collar_wing/shirt-button/shirt-button.png',
        variantImageCBH:
          '2.shirt-collar/shirt-collar_wing/shirt-button-hole/shirt-button-hole',
        variantImageCBT:
          '2.shirt-collar/shirt-collar_wing/shirt-button-thread/shirt-button-thread',
      },
    ],

    cuffvariants: [
      {
        variantId: 'cf1',
        variantType: 'Double Button Angled',
        variantImage:
          '4.shirt-cuff/shirt-cuff_double-button_angled/shirt-cuff_double-button_angled',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/32_shirt-cuff_double-button_angled-01.png',
      },
      {
        variantId: 'cf2',
        variantType: 'Double Button Rounded',
        variantImage:
          '4.shirt-cuff/shirt-cuff_double-button_rounded/shirt-cuff_double-button_rounded',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/31_shirt-cuff_double-button_rounded-01.png',
      },
      {
        variantId: 'cf3',
        variantType: 'Double Button Squared',
        variantImage:
          '4.shirt-cuff/shirt-cuff_double-button_squred/shirt-cuff_double-button_squred',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/33_shirt-cuff_double-button_squred-01.png',
      },
      {
        variantId: 'cf4',
        variantType: 'French Single Squared',
        variantImage:
          '4.shirt-cuff/shirt-cuff_French_single_squred/shirt-cuff_French_single_squred',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/36_shirt-cuff_French_single-button_squred-01.png',
      },
      {
        variantId: 'cf5',
        variantType: 'French Single Button Angled',
        variantImage:
          '4.shirt-cuff/shirt-cuff_French_single-button_angled/shirt-cuff_French_single-button_angled',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/32_shirt-cuff_double-button_angled-01.png',
      },
      {
        variantId: 'cf6',
        variantType: 'French Single Button Round',
        variantImage:
          '4.shirt-cuff/shirt-cuff_french_single-button_round/shirt-cuff_french_single-button_round',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/32_shirt-cuff_double-button_angled-01.png',
      },
      {
        variantId: 'cf7',
        variantType: 'Single Button Angled',
        variantImage:
          '4.shirt-cuff/shirt-cuff_single-button_angled/shirt-cuff_single-button_angled',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/29_shirt-cuff_single-button_angled-01.png',
      },
      {
        variantId: 'cf8',
        variantType: 'Single Button Rounded',
        variantImage:
          '4.shirt-cuff/shirt-cuff_single-button_rounded/shirt-cuff_single-button_rounded',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/28_shirt-cuff_single-button_rounded-01.png',
      },
      {
        variantId: 'cf9',
        variantType: 'Single Button Squared',
        variantImage:
          '4.shirt-cuff/shirt-cuff_single-button_squred/shirt-cuff_single-button_squred',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/04 Shirt-CUFFs_Final/30_shirt-cuff_single-button_squred-01.png',
      },
    ],

    sleevevariants: [
      {
        variantId: 'sv1',
        variantType: 'Full',
        variantImage: '4.shirt-cuff/shirt-cuff_double-button_angled',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/07 Shirt-SLEEVE_Final/44_shirt-sleev_full-01.png',
      },
      {
        variantId: 'sv2',
        variantType: 'Half',
        variantImage: '7.shirt-sleev/shirt-sleeve_half/shirt-sleeve_half',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/07 Shirt-SLEEVE_Final/45_shirt-sleev_half-01.png',
      },
    ],
    elbowpatchvariants: [
      {
        variantId: 'ep1',
        variantType: 'None',
        variantImage: '',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/13 Shirt_ELBOW PATCHES_Final/60_shirt-elbow-patch_by-default-01.png',
      },
      {
        variantId: 'ep2',
        variantType: 'Custom Color',
        variantImage:
          'imge/Shirt_Back/13.shirt-elbow-patch/shirt-elbow-patch_custom-color/shirt-elbow-patch_custom-color',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/13 Shirt_ELBOW PATCHES_Final/61_shirt-elbow-patch_custom-color-01.png',
      },
    ],

    fitvariants: [
      {
        variantId: 'ft1',
        variantType: 'Regular',
        variantImage:
          '1.shirt-fitting/shirt-fitting_regular-fit/shirt-fitting_regular-fit',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/01 Shirt-FITTINGS/01_shirt-fitting_slim-fit.jpg',
      },
      {
        variantId: 'ft2',
        variantType: 'Slim',
        variantImage:
          '1.shirt-fitting/shirt-fitting_slim-fit/shirt-fitting_slim-fit',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/01 Shirt-FITTINGS/02_shirt-fitting_regular-fit.jpg',
      },
    ],
    backpleatvariants: [
      {
        variantId: 'bpt1',
        variantType: 'No Pleat',
        variantImage:
          '1.shirt-fitting/shirt-fitting_regular-fit/shirt-fitting_regular-fit',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/08 Shirt-BACK PLEATs_Final/46_shirt-back-pleat_None-01.png',
      },
      {
        variantId: 'bpt2',
        variantType: 'Center',
        variantImage:
          '8.shirt-back-pleat/shirt-back-pleat_center/shirt-back-pleat_center',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/08 Shirt-BACK PLEATs_Final/47_shirt-back-pleat_center-01.png',
      },
      {
        variantId: 'bpt3',
        variantType: 'Side',
        variantImage:
          '8.shirt-back-pleat/shirt-back-pleat_Side/shirt-back-pleat_Side',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/08 Shirt-BACK PLEATs_Final/48_shirt-back-pleat_Side-01.png',
      },
    ],

    placketvariants: [
      {
        variantId: 'pk1',
        variantType: 'Standard Front',
        variantImage: '',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/05 Shirt-PLACKETs_Final/38_shirt-placket_standard-front-01.png',
      },


      {
        variantId: 'pk2',
        variantType: 'French Front',
        variantImage:
          '5.shirt-placket/shirt-placket_french-front/shirt-placket_french-front',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/05 Shirt-PLACKETs_Final/39_shirt-placket_french-front-01.png',
      },

      {
        variantId: 'pk3',
        variantType: 'Hidden',
        variantImage:
          '5.shirt-placket/shirt-placket_hidden-front/shirt-placket_hidden-front',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/05 Shirt-PLACKETs_Final/40_shirt-placket_hidden-front-01.png',
      },

    ],

    tuckvariants: [
      {
        variantId: 'tc1',
        variantType: 'Classic Curved Hem',
        variantImage:
          '6.shirt-bottom-hem/shirt-bottom_classic-curved-hem/shirt-bottom_classic-curved-hem',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/06 Shirt-CUSTOM BOTTOM_HEM_Final/42_shirt-bottom_classic-curved-hem-01.png',
        variantImageP:
          '6.shirt-bottom-hem/shirt-bottom_classic-curved-hem/shirt-button-placket/placket',
        variantImageBB:
          '6.shirt-bottom-hem/shirt-bottom_classic-curved-hem/shirt-button/shirt-button-101.png',
        variantImageBBH:
          '6.shirt-bottom-hem/shirt-bottom_classic-curved-hem/shirt-button-hole/shirt-button-hole',
        variantImageBBT:
          '6.shirt-bottom-hem/shirt-bottom_classic-curved-hem/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'tc2',
        variantType: 'Side Cut Hem',
        variantImage:
          '6.shirt-bottom-hem/shirt-bottom_side-cut-hem/shirt-bottom_side-cut-hem',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/06 Shirt-CUSTOM BOTTOM_HEM_Final/43_shirt-bottom_half-sleeve-hem-01.png',
        variantImageP:
          '6.shirt-bottom-hem/shirt-bottom_side-cut-hem/shirt-button-placket/shirt-button-placket',
        variantImageBB:
          '6.shirt-bottom-hem/shirt-bottom_side-cut-hem/shirt-button/shirt-button-101.png',
        variantImageBBH:
          '6.shirt-bottom-hem/shirt-bottom_side-cut-hem/shirt-button-hole/shirt-button-hole',
        variantImageBBT:
          '6.shirt-bottom-hem/shirt-bottom_side-cut-hem/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'tc3',
        variantType: 'Straight Cut Hem',
        variantImage:
          '6.shirt-bottom-hem/shirt-bottom_straight-cut-hem/shirt-bottom_straight-cut-hem',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/06 Shirt-CUSTOM BOTTOM_HEM_Final/41_shirt-bottom_straight-cut-hem-01.png',
        variantImageP:
          '6.shirt-bottom-hem/shirt-bottom_straight-cut-hem/shirt-button-placket/shirt-button-placket',
        variantImageBB:
          '6.shirt-bottom-hem/shirt-bottom_straight-cut-hem/shirt-button/shirt-button-101.png',
        variantImageBBH:
          '6.shirt-bottom-hem/shirt-bottom_straight-cut-hem/shirt-button-hole/shirt-button-hole',
        variantImageBBT:
          '6.shirt-bottom-hem/shirt-bottom_straight-cut-hem/shirt-button-thread/shirt-button-thread',
      },
    ],

    customcollarvariants: [
      {
        variantId: 'csf4',
        variantType: 'none',
        variantImage:
          '2.shirt-collar/shirt-collar_point/shirt-collar_point',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/09 Shirt-CUSTOMIZE COLLAR_Final/52_shirt-customize-collar_none-01.png',
        variantImageCB: '',
        variantImageCBH: '',
        variantImageCBT: '',
      },
      {
        variantId: 'csf1',
        variantType: 'all fabrics',
        variantImage:
          '9.shirt-customize-collar/shirt-customize-collar_all fabrics/shirt-customize-collar_all fabrics',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/09 Shirt-CUSTOMIZE COLLAR_Final/49_shirt-customize-collar_all fabrics-01.png',
        variantImageCB:
          'imge/Shirt_Front/9.shirt-customize-collar/shirt-customize-collar_all fabrics/shirt-button/shirt-button-101.png',
        variantImageCBH:
          'imge/Shirt_Front/9.shirt-customize-collar/shirt-customize-collar_all fabrics/shirt-button-hole/shirt-button-hole-102.png',
        variantImageCBT:
          'imge/Shirt_Front/9.shirt-customize-collar/shirt-customize-collar_all fabrics/shirt-button-thread/shirt-button-thread-102.png',
      },
      {
        variantId: 'csf2',
        variantType: 'inner fabric',
        variantImage:
          '9.shirt-customize-collar/shirt-customize-collar_inner-fabric/shirt-customize-collar_inner-fabric',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/09 Shirt-CUSTOMIZE COLLAR_Final/51_shirt-customize-collar_inner-fabric-01.png',
        variantImageCB: '',
        variantImageCBH: '',
        variantImageCBT: '',
      },
      {
        variantId: 'csf3',
        variantType: 'outer fabric',
        variantImage:
          '9.shirt-customize-collar/shirt-customize-collar_outer-fabric/shirt-customize-collar_outer-fabric',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/09 Shirt-CUSTOMIZE COLLAR_Final/50_shirt-customize-collar_outer-fabric-01.png',
        variantImageCB: '',
        variantImageCBH: '',
        variantImageCBT: '',
      },
    ],

    customcuffvariants: [
      {
        variantId: 'csc4',
        variantType: 'none',
        variantImage:
          '4.shirt-cuff/shirt-cuff_double-button_angled',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/10 Shirt-CUSTOMIZE CUFFS_Final/56_shirt-customize-cuff_none-01.png',
      },
      {
        variantId: 'csc1',
        variantType: 'all fabrics',
        variantImage:
          '10.shirt-customize-cuff/shirt-customize-cuff_all-fabric/shirt-customize-cuff_all-fabric',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/10 Shirt-CUSTOMIZE CUFFS_Final/53_shirt-customize-cuff_all-fabric-01.png',
      },
      {
        variantId: 'csc2',
        variantType: 'inner fabric',
        variantImage:
          '10.shirt-customize-cuff/shirt-customize-cuff_inner-fabric/shirt-customize-cuff_inner-fabric',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/10 Shirt-CUSTOMIZE CUFFS_Final/55_shirt-customize-cuff_inner-fabric-01.png',
      },
      {
        variantId: 'csc3',
        variantType: 'outer fabric',
        variantImage:
          '10.shirt-customize-cuff/shirt-customize-cuff_outer-fabric/shirt-customize-cuff_outer-fabric',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/10 Shirt-CUSTOMIZE CUFFS_Final/54_shirt-customize-cuff_outer-fabric-01.png',
      },
    ],

    chestpocketvariants: [
      {
        variantId: 'cp1',
        variantType: 'Angle Corner 1 Pocket',
        variantImage:
          '3.shirt-pocket/shirt-pocket_angle-corner_1-pocket/shirt-pocket_angle-corner_1-pocket',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/14_shirt-pocket_angle-corner_1-pocket-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp2',
        variantType: 'Angle Corner 1 Pockets With Flap',
        variantImage:
          '3.shirt-pocket/shirt-pocket_angle-corner_1-pocket_with-flap/shirt-pocket_angle-corner_1-pocket_with-flap',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/20_shirt-pocket_angle-corner_1-pocket_with-flap-01.png',
        variantImageB:
          '3.shirt-pocket/shirt-pocket_angle-corner_1-pocket_with-flap/shirt-button/shirt-button.png',
        variantImageBT:
          '3.shirt-pocket/shirt-pocket_angle-corner_1-pocket_with-flap/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cp3',
        variantType: 'Angle Corner 2 Pockets',
        variantImage:
          '3.shirt-pocket/shirt-pocket_angle-corner_2-pockets/shirt-pocket_angle-corner_2-pockets',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/17_shirt-pocket_angle-corner_2-pockets-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp4',
        variantType: 'Angle Corner 2 Pockets With Flap',
        variantImage:
          '3.shirt-pocket/shirt-pocket_angle-corner_2-pockets_with-flap/shirt-pocket_angle-corner_2-pockets_with-flap',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/23_shirt-pocket_angle-corner_2-pockets_with-flap-01.png',
        variantImageB:
          '3.shirt-pocket/shirt-pocket_angle-corner_2-pockets_with-flap/shirt-button/shirt-button.png',
        variantImageBT:
          '3.shirt-pocket/shirt-pocket_angle-corner_2-pockets_with-flap/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cp5',
        variantType: 'No Pocket',
        variantImage: '',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/27_shirt-pocket_No Pocket-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp6',
        variantType: 'Regular Point 2 Pockets',
        variantImage:
          '3.shirt-pocket/shirt-pocket_regular point_2-pockets/shirt-pocket_regular point_2-pockets',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/16_shirt-pocket_regula- point_2-pockets-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp7',
        variantType: 'Regular Point 1 Pocket',
        variantImage:
          '3.shirt-pocket/shirt-pocket_regular-point_1-pocket/shirt-pocket_regular-point_1-pocket',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/13_shirt-pocket_regular-point_1-pocket-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp8',
        variantType: 'Regular Point 1 Pocket With Flap',
        variantImage:
          '3.shirt-pocket/shirt-pocket_regular-point_1-pocket_with-flap/shirt-pocket_regular-point_1-pocket_with-flap',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/19_shirt-pocket_regular-point_1-pocket_with-flap-01.png',
        variantImageB:
          '3.shirt-pocket/shirt-pocket_regular-point_1-pocket_with-flap/shirt-button/shirt-button.png',
        variantImageBT:
          '3.shirt-pocket/shirt-pocket_regular-point_1-pocket_with-flap/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cp9',
        variantType: 'Regular Point 2 Pockets with Flap ',
        variantImage:
          '3.shirt-pocket/shirt-pocket_regular-point_2-pockets_with-flap/shirt-pocket_regular-point_2-pockets_with-flap',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/22_shirt-pocket_regular-point_2-pockets_with-flap-01.png',
        variantImageB:
          '3.shirt-pocket/shirt-pocket_regular-point_2-pockets_with-flap/shirt-button/shirt-button.png',
        variantImageBT:
          '3.shirt-pocket/shirt-pocket_regular-point_2-pockets_with-flap/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cp10',
        variantType: 'Round 1 Pocket',
        variantImage:
          '3.shirt-pocket/shirt-pocket_round_1-pocket/shirt-pocket_round_1-pocket',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/15_shirt-pocket_round_1-pocket-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp11',
        variantType: 'Round 1 Pocket With Flap',
        variantImage:
          '3.shirt-pocket/shirt-pocket_round_1-pocket_with-flap/shirt-pocket_round_1-pocket_with-flap',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/21_shirt-pocket_round_1-pocket_with-flap-01.png',
        variantImageB:
          '3.shirt-pocket/shirt-pocket_Round_1-pocket_with-flap/shirt-button/shirt-button.png',
        variantImageBT:
          '3.shirt-pocket/shirt-pocket_Round_1-pocket_with-flap/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cp12',
        variantType: 'Round 2 Pockets With Flap',
        variantImage:
          '3.shirt-pocket/shirt-pocket_Round_2-pocket_with-flap/shirt-pocket_Round_2-pocket_with-flap',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/24_shirt-pocket_Round_2-pocket_with-flap-01.png',
        variantImageB:
          '3.shirt-pocket/shirt-pocket_Round_2-pocket_with-flap/shirt-button/shirt-button.png',
        variantImageBT:
          '3.shirt-pocket/shirt-pocket_Round_2-pocket_with-flap/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cp13',
        variantType: 'Round 2 Pockets',
        variantImage:
          '3.shirt-pocket/shirt-pocket_round_2-pockets/shirt-pocket_round_2-pockets',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/18_shirt-pocket_round_2-pockets-01.png',
        variantImageB: '',
        variantImageBT: '',
      },
      {
        variantId: 'cp14',
        variantType: 'Western 2 Pockets',
        variantImage:
          '3.shirt-pocket/shirt-pocket_western_2_pockets/shirt-pocket_western_2_pockets',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/26_shirt-pocket_western_2_pockets-01.png',
        variantImageB:
          '3.shirt-pocket/shirt-pocket_western_2_pockets/shirt-button/shirt-button.png',
        variantImageBT:
          '3.shirt-pocket/shirt-pocket_western_2_pockets/shirt-button-thread/shirt-button-thread',
      },
      {
        variantId: 'cp15',
        variantType: 'Western 1 Pocket',
        variantImage:
          '3.shirt-pocket/shirt-pocket-western_1-pocket/shirt-pocket-western_1-pocket',
        variantImageL:
          'imge/Shirt_Front/Line Art (1)/SHIRTS/Shirt_Final-Version/03 Shirt-POCKETs_Final/25_shirt-pocket-western_1-pocket-01.png',
        variantImageB:
          '3.shirt-pocket/shirt-pocket-western_1-pocket/shirt-button/shirt-button.png',
        variantImageBT:
          '3.shirt-pocket/shirt-pocket-western_1-pocket/shirt-button-thread/shirt-button-thread',
      },
    ],
  },

  methods: {


    updateProductFit(variantImage) {
      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )

      this.shirtfit = 'imge/Shirt_Front/' + variantImage + selected.value
      this.shirtBfit = 'imge/Shirt_Back/' + variantImage + selected.value
      this.shirtSfit = 'imge/Shirt_Side/' + variantImage + selected.value

    },
    updateProductBackPleat(variantImage) {
      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )
      this.shirtBfit = 'imge/Shirt_Back/' + variantImage + selected.value
    },
    updateProductCustomCuff(variantImage) {
      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )
      document.getElementById('defaultcuff').style.display = 'none'
      document.getElementById('customcuff').style.display = 'block'
      this.cuffs = ''
      this.ffcuff = 'imge/Shirt_Front/' + variantImage + selected.value;
      this.ffcuffs = 'imge/Shirt_Side/' + variantImage + selected.value;
      this.ffcuffb = 'imge/Shirt_Back/' + variantImage + selected.value;
      if (document.getElementById('csc4').checked) {
        this.ffcuffs = 'imge/Shirt_Side/4.shirt-cuff/shirt-cuff_double-button_rounded/shirt-cuff_double-button_rounded-102.png'
      }
    },
    updateProductCollar(variantImage, variantImageCB, variantImageCBH, variantImageCBT) {
      document.getElementById('customcollar').style.display = 'none'
      document.getElementById('collar').style.display = 'block'
      document.getElementById('collars').style.display = 'block'
      this.customcollar = ''
      this.customScollar = ''
      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )

      this.modelhead = 'imge/Shirt_Front/Maniquin/head.png'
      this.modelShead = 'imge/Shirt_Side/1.shirt-fitting/Maniquin/head.png'
      this.modelBhead = 'imge/Shirt_Back/2.shirt-collar/2.shirt-collar' + selected.value
      if (document.getElementById('cl1').checked) {
        this.collar = 'imge/Shirt_Front/' + variantImage + selected.value
        this.collars = 'imge/Shirt_Side/' + variantImage + selected.value
        this.collarbutton = 'imge/Shirt_Front/' + variantImageCB;
        this.collarSbutton = 'imge/Shirt_Side/' + variantImageCB;
        this.collarbuttonhole = 'imge/Shirt_Front/' + variantImageCBH + selected.value;
        this.collarSbuttonhole = 'imge/Shirt_Side/' + variantImageCBH + selected.value
        this.collarbuttonthread = 'imge/Shirt_Front/' + variantImageCBT + selected.value;
        this.collarSbuttonthread = 'imge/Shirt_Side/' + variantImageCBT + selected.value;

      }
      else if (document.getElementById('cl2').checked) {
        this.collar = 'imge/Shirt_Front/' + variantImage + selected.value
        this.collars = 'imge/Shirt_Side/' + variantImage + selected.value
        this.collarbutton = 'imge/Shirt_Front/' + variantImageCB;
        this.collarSbutton = 'imge/Shirt_Side/' + variantImageCB;
        this.collarbuttonhole = 'imge/Shirt_Front/' + variantImageCBH + selected.value;
        this.collarSbuttonhole = 'imge/Shirt_Side/' + variantImageCBH + selected.value
        this.collarbuttonthread = 'imge/Shirt_Front/' + variantImageCBT + selected.value;
        this.collarSbuttonthread = 'imge/Shirt_Side/' + variantImageCBT + selected.value;



      }
      else if (document.getElementById('cl3').checked) {
        this.collar = 'imge/Shirt_Front/' + variantImage + selected.value
        this.collars = 'imge/Shirt_Side/' + variantImage + selected.value
        this.collarbutton = 'imge/Shirt_Front/' + variantImageCB;
        this.collarSbutton = 'imge/Shirt_Side/' + variantImageCB;
        this.collarbuttonhole = 'imge/Shirt_Front/' + variantImageCBH + selected.value;
        this.collarSbuttonhole = 'imge/Shirt_Side/' + variantImageCBH + selected.value
        this.collarbuttonthread = 'imge/Shirt_Front/' + variantImageCBT + selected.value;
        this.collarSbuttonthread = 'imge/Shirt_Side/' + variantImageCBT + selected.value;




      }
      else if (document.getElementById('cl4').checked) {
        this.collar = 'imge/Shirt_Front/' + variantImage + selected.value
        this.collars = 'imge/Shirt_Side/' + variantImage + selected.value
        this.collarbutton = 'imge/Shirt_Front/' + variantImageCB;
        this.collarSbutton = 'imge/Shirt_Side/' + variantImageCB;
        this.collarbuttonhole = 'imge/Shirt_Front/' + variantImageCBH + selected.value;
        this.collarSbuttonhole = 'imge/Shirt_Side/' + variantImageCBH + selected.value
        this.collarbuttonthread = 'imge/Shirt_Front/' + variantImageCBT + selected.value;
        this.collarSbuttonthread = 'imge/Shirt_Side/' + variantImageCBT + selected.value;



      }
      else if (document.getElementById('cl5').checked) {
        this.collar = 'imge/Shirt_Front/' + variantImage + selected.value
        this.collars = 'imge/Shirt_Side/' + variantImage + selected.value
        this.collarbutton = 'imge/Shirt_Front/' + variantImageCB;
        this.collarSbutton = 'imge/Shirt_Side/' + variantImageCB;
        this.collarbuttonhole = 'imge/Shirt_Front/' + variantImageCBH + selected.value;
        this.collarSbuttonhole = 'imge/Shirt_Side/' + variantImageCBH + selected.value
        this.collarbuttonthread = 'imge/Shirt_Front/' + variantImageCBT + selected.value;
        this.collarSbuttonthread = 'imge/Shirt_Side/' + variantImageCBT + selected.value;




      }
      else if (document.getElementById('cl6').checked) {
        this.collarbutton = 'imge/Shirt_Front/' + variantImageCB;
        this.collarSbutton = 'imge/Shirt_Side/' + variantImageCB;
        this.collarbuttonhole = 'imge/Shirt_Front/' + variantImageCBH + selected.value;
        this.collarSbuttonhole = 'imge/Shirt_Side/' + variantImageCBH + selected.value
        this.collarbuttonthread = 'imge/Shirt_Front/' + variantImageCBT + selected.value;
        this.collarSbuttonthread = 'imge/Shirt_Side/' + variantImageCBT + selected.value;
        this.collar = 'imge/Shirt_Front/' + variantImage + selected.value
        this.collars = 'imge/Shirt_Side/' + variantImage + selected.value



      }
      else if (document.getElementById('cl7').checked) {
        this.collarbutton = 'imge/Shirt_Front/' + variantImageCB;
        this.collarSbutton = 'imge/Shirt_Side/' + variantImageCB;
        this.collarbuttonhole = 'imge/Shirt_Front/' + variantImageCBH + selected.value;
        this.collarSbuttonhole = 'imge/Shirt_Side/' + variantImageCBH + selected.value
        this.collarbuttonthread = 'imge/Shirt_Front/' + variantImageCBT + selected.value;
        this.collarSbuttonthread = 'imge/Shirt_Side/' + variantImageCBT + selected.value;
        this.collar = 'imge/Shirt_Front/' + variantImage + selected.value
        this.collars = 'imge/Shirt_Side/' + variantImage + selected.value



      }
      else if (document.getElementById('cl8').checked) {
        this.collarbutton = 'imge/Shirt_Front/' + variantImageCB;
        this.collarSbutton = 'imge/Shirt_Side/' + variantImageCB;
        this.collarbuttonhole = 'imge/Shirt_Front/' + variantImageCBH + selected.value;
        this.collarSbuttonhole = 'imge/Shirt_Side/' + variantImageCBH + selected.value
        this.collarbuttonthread = 'imge/Shirt_Front/' + variantImageCBT + selected.value;
        this.collarSbuttonthread = 'imge/Shirt_Side/' + variantImageCBT + selected.value;
        this.collar = 'imge/Shirt_Front/' + variantImage + selected.value
        this.collars = 'imge/Shirt_Side/' + variantImage + selected.value


      }
      else if (document.getElementById('cl9').checked) {
        document.getElementById('collarsbuttonwing').style = {
          "translate": "transformX(33px)"
        }
        this.collarbutton = 'imge/Shirt_Front/' + variantImageCB;
        this.collarSbutton = 'imge/Shirt_Side/' + variantImageCB;
        this.collarbuttonhole = 'imge/Shirt_Front/' + variantImageCBH + selected.value;
        this.collarSbuttonhole = 'imge/Shirt_Side/' + variantImageCBH + selected.value
        this.collarbuttonthread = 'imge/Shirt_Front/' + variantImageCBT + selected.value;
        this.collarSbuttonthread = 'imge/Shirt_Side/' + variantImageCBT + selected.value;
        this.collar = 'imge/Shirt_Front/' + variantImage + selected.value
        this.collars = 'imge/Shirt_Side/' + variantImage + selected.value


      }


    },

    updateProductCustomCollar(variantImage) {
      document.getElementById('collars').style.display = 'none'


      document.getElementById('customcollar').style.display = 'block'

      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )
      this.customcollar = variantImage
      if (document.getElementById('csf4').checked) {


        this.modelhead = 'imge/Shirt_Front/Maniquin/head.png'
        this.modelShead = 'imge/Shirt_Side/1.shirt-fitting/Maniquin/head.png'
        this.modelBhead = 'imge/Shirt_Back/2.shirt-collar/2.shirt-collar' + selected.value;
        // this.collar = 'imge/Shirt_Front/' + variantImage + selected.value;
        // this.collars = 'imge/Shirt_Side/' + variantImage + selected.value;
        this.customcollar = 'imge/Shirt_Front/' + variantImage + selected.value;
        this.customScollar = 'imge/Shirt_Side/' + variantImage + selected.value;





      }
      else if (document.getElementById('csf1').checked) {
        this.modelhead = ''
        this.modelBhead = 'imge/Shirt_Back/9.shirt-customize-collar/shirt-customize-collar_all fabrics/shirt-customize-collar_all fabrics-101.png'
        this.modelShead = '';
        this.customcollar = 'imge/Shirt_Front/' + variantImage + selected.value;
        this.customScollar = 'imge/Shirt_Side/' + variantImage + selected.value;
      }
      else if (document.getElementById('csf2').checked) {
        this.modelBhead = 'imge/Shirt_Back/2.shirt-collar/2.shirt-collar' + selected.value;
        this.modelShead = '';
        this.customcollar = 'imge/Shirt_Front/' + variantImage + selected.value;
        this.customScollar = 'imge/Shirt_Side/' + variantImage + selected.value;
      }
      else if (document.getElementById('csf3').checked) {
        this.modelhead = '';
        this.modelShead = '';
        this.modelBhead = 'imge/Shirt_Back/2.shirt-collar/2.shirt-collar' + selected.value;
        this.customcollar = 'imge/Shirt_Front/' + variantImage + selected.value;
        this.customScollar = 'imge/Shirt_Side/' + variantImage + selected.value;
      }


    },
    updateProductCustomCollarB(variantImageCB) {
      this.collarbutton = variantImageCB
    },
    updateProductCustomCollarBH(variantImageCBH) {
      this.collarbuttonhole = variantImageCBH;

    },
    updateProductCustomCollarBT(variantImageCBT) {
      this.collarbuttonthread = variantImageCBT
    },
    updateProductPocket(variantImage) {
      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )
      this.chestpocket = 'imge/Shirt_Front/' + variantImage + selected.value;
      this.chestSpocket = 'imge/Shirt_Side/' + variantImage + selected.value;
      if (document.getElementById('cp5').checked) {
        this.chestpocket = ''
        this.chestSpocket = ''
      }

    },
    updateProductPocketB(variantImageB) {

      this.chestpocketbutton = 'imge/Shirt_Front/' + variantImageB;
      this.chestpocketSbutton = 'imge/Shirt_Side/' + variantImageB;
      if (document.getElementById('cp1').checked || document.getElementById('cp3').checked || document.getElementById('cp5').checked || document.getElementById('cp6').checked || document.getElementById('cp7').checked || document.getElementById('cp10').checked || document.getElementById('cp13').checked) {
        this.chestpocketbutton = '';
        this.chestpocketSbutton = '';
      }
      if (this.ischeckedSideview()) {
        this.chestpocketbutton = ''
      }


    },
    updateProductPocketBT(variantImageBT) {
      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )
      this.chestpocketbuttonthread = 'imge/Shirt_Front/' + variantImageBT + selected.value;
      this.chestpocketSbuttonthread = 'imge/Shirt_Side/' + variantImageBT + selected.value;
      if (document.getElementById('cp1').checked || document.getElementById('cp3').checked || document.getElementById('cp5').checked || document.getElementById('cp6').checked || document.getElementById('cp7').checked || document.getElementById('cp10').checked || document.getElementById('cp13').checked) {
        this.chestpocketbuttonthread = '';
        this.chestpocketSbuttonthread = '';
      }
    },
    updateProductSleeve(variantImage) {
      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )
      this.sleeve = 'imge/Shirt_Front/' + variantImage + selected.value;
      this.bsleeve = 'imge/Shirt_Back/' + variantImage + selected.value;
      this.S_sleeve = 'imge/Shirt_Side/' + variantImage + selected.value;
      this.cuff = ''
      this.ffcuff = ''
      this.ffcuffs = ''
      this.ffcuffb = ''
      this.bcuff = ''
      this.cuffs = ''
      if (document.getElementById('sv1').checked) {
        this.S_sleeve = 'imge/Shirt_Side/' + "4.shirt-cuff/shirt-cuff_double-button_rounded/shirt-cuff_double-button_rounded" + selected.value
      }


      if (document.getElementById('sv2').checked) {
        document.getElementById('elbowPatch').style.display = 'none'
        this.elbowpatch = ''
      } else {
        document.getElementById('elbowPatch').style.display = 'block'
      }
    },
    updateProductElbowPatch(variantImage) {
      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )
      if (document.getElementById('ep2').checked) {
        this.elbowpatch = variantImage + selected.value
      } else {
        this.elbowpatch = ''
      }
    },
    updateProductCuff(variantImage) {
      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )


      document.getElementById('defaultcuff').style.display = 'block'
      document.getElementById('customcuff').style.display = 'none'
      this.ffcuff = '';
      this.ffcuffs = '';

      this.cuff = 'imge/Shirt_Front/' + variantImage + selected.value
      this.bcuff = 'imge/Shirt_Back/' + variantImage + selected.value
      this.cuffs = 'imge/Shirt_Side/' + variantImage + selected.value;
      this.sleeve = ''
      this.bsleeve = ''
      this.S_sleeve = ''

    },


    updateProductPlacket(variantImage) {
      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )
      document.getElementById('untuck').style.display = 'none';
      document.getElementById('tuck').style.display = 'block';
      this.shirtfullfit = ''
      this.shirtSfullfit = ''
      this.shirtBfullfit = ''
      this.ffplacket = ''
      this.S_ffplacket = ''
      this.ffshirtbutton = '';
      this.ffshirtbuttonthread = '';
      this.ffshirtbuttonhole = '';
      this.ffshirtSbutton = '';
      this.ffshirtSbuttonthread = '';
      this.ffshirtSbuttonhole = '';


      this.modelpant = 'imge/Shirt_Front/Maniquin/pant/head-101.png';
      this.modelBpant = 'imge/Shirt_Back/Maniquin Smart Shirt.png';
      this.modelSpant = 'imge/Shirt_Side/1.shirt-fitting/Maniquin/Pant.png';
      this.placket = 'imge/Shirt_Front/' + variantImage + selected.value;
      this.S_placket = 'imge/Shirt_Side/' + variantImage + selected.value;
      if (document.getElementById('pk1').checked) {
        this.placket = '';
        this.S_placket = '';
        this.ffplacket = ''
        this.S_ffplacket = ''

      }
      if (document.getElementById('pk3').checked) {
        this.shirtbutton = ''
        this.shirtbuttonthread = '';
        this.shirtbuttonhole = '';
        this.shirtSbutton = '';
        this.shirtbuttonSthread = '';
        this.shirtSbuttonhole = '';


      } else {
        this.shirtbutton =
          'imge/Shirt_Front/5.shirt-placket/shirt-placket_french-front/shirt-button/shirt-button-101.png';
        this.shirtSbutton = 'imge/Shirt_Side/5.shirt-placket/shirt-placket_french-front/shirt-button/shirt-button-101.png'
        this.shirtbuttonthread =
          'imge/Shirt_Front/5.shirt-placket/shirt-placket_french-front/shirt-button-hole/shirt-button-hole-102.png'
        this.shirtbuttonSthread = 'imge/Shirt_Side/5.shirt-placket/shirt-placket_french-front/shirt-button-hole/shirt-button-hole-102.png';
        this.shirtbuttonhole =
          'imge/Shirt_Front/5.shirt-placket/shirt-placket_french-front/shirt-button-thread/shirt-button-thread-102.png'
        this.shirtSbuttonhole = 'imge/Shirt_Side/5.shirt-placket/shirt-placket_french-front/shirt-button-thread/shirt-button-thread-102.png';
      }
    },
    updateProductTuck(
      variantImage,
      variantImageBB,
      variantImageP,
      variantImageBBT,
      variantImageBBH
    ) {
      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )
      document.getElementById('untuck').style.display = 'block';
      document.getElementById('tuck').style.display = 'none';
      this.placket = '';
      this.S_placket = '';
      this.shirtfullfit = 'imge/Shirt_Front/' + variantImage + selected.value
      this.shirtSfullfit = 'imge/Shirt_Side/' + variantImage + selected.value;
      this.shirtBfullfit = 'imge/Shirt_Back/' + variantImage + selected.value

      this.modelpant = 'imge/Shirt_Front/6.shirt-bottom-hem/Maniquin/pant-101.png'
      this.modelBpant = 'imge/Shirt_Back/Maniquin full shirt.png'
      this.modelSpant = 'imge/Shirt_Side/6.shirt-bottom-hem/Maniquin/pant-102.png'
      if (document.getElementById('pk3').checked) {
        this.ffshirtbutton = ''
        this.ffshirtSbutton = ''
        this.ffshirtbuttonthread = ''
        this.ffshirtSbuttonthread = ''
        this.ffshirtbuttonhole = ''
        this.ffshirtSbuttonhole = ''

      } else {
        this.shirtbutton = '';
        this.shirtbuttonthread = '';
        this.shirtbuttonhole = '';

        this.shirtSbutton = '';
        this.shirtSbuttonthread = '';
        this.shirtSbuttonhole = '';

        this.ffshirtbutton = 'imge/Shirt_Front/' + variantImageBB;
        this.ffshirtSbutton = 'imge/Shirt_Side/' + variantImageBB;
        this.ffshirtbuttonthread = 'imge/Shirt_Front/' + variantImageBBT + selected.value;
        this.ffshirtSbuttonthread = 'imge/Shirt_Side/' + variantImageBBT + selected.value;
        this.ffshirtbuttonhole = 'imge/Shirt_Front/' + variantImageBBH + selected.value;
        this.ffshirtSbuttonhole = 'imge/Shirt_Side/' + variantImageBBH + selected.value;
        this.ffplacket = 'imge/Shirt_Front/' + variantImageP + selected.value;
        this.S_ffplacket = 'imge/Shirt_Side/' + variantImageP + selected.value;
      }
    },

    updateProduct() {
      document.getElementById('defaultcuff').style.display = 'block'
      document.getElementById('customcuff').style.display = 'none'
      document.getElementById('customcollar').style.display = 'none'
      document.getElementById('tuck').style.display = 'block'
      document.getElementById('untuck').style.display = 'none'
      document.getElementById('collar').style.display = 'block'
      this.modelpant = 'imge/Shirt_Front/Maniquin/pant/head-101.png'
      this.modelhead = 'imge/Shirt_Front/Maniquin/head.png'
      this.shirtfullfit = ''
      this.ffplacket = ''
      this.ffshirtbutton = ''
      this.ffshirtbuttonthread = ''
      this.ffshirtbuttonhole = ''
      if (document.getElementById('pk3').checked) {
        this.placket =
          'imge/Shirt_Front/5.shirt-placket/shirt-placket_hidden-front/shirt-placket_hidden-front-102.png'
      }

      //method end
    },
    changeFabric() {

      var selected = document.querySelector(
        'input[type=radio][name=checkColor]:checked'
      )
      this.modelhead = 'imge/Shirt_Front/Maniquin/head.png';
      this.modelBhead = 'imge/Shirt_Back/2.shirt-collar/2.shirt-collar' + selected.value;
      this.modelShead = 'imge/Shirt_Side/1.shirt-fitting/Maniquin/head.png';
      this.modelpant = 'imge/Shirt_Front/Maniquin/pant/head-101.png';
      this.modelBpant = 'imge/Shirt_Back/Maniquin Smart Shirt.png';
      this.modelSpant = 'imge/Shirt_Side/1.shirt-fitting/Maniquin/Pant.png';
      this.cuff = 'imge/Shirt_Front/' + '4.shirt-cuff/shirt-cuff_double-button_angled/shirt-cuff_double-button_angled' + selected.value;
      this.bcuff = 'imge/Shirt_Back/' + '4.shirt-cuff/shirt-cuff_double-button_angled/shirt-cuff_double-button_angled' + selected.value;
      this.cuffs = 'imge/Shirt_Side/' + '4.shirt-cuff/shirt-cuff_double-button_rounded/shirt-cuff_double-button_rounded' + selected.value;
      this.collar = 'imge/Shirt_Front/' + '2.shirt-collar/shirt-collar_button-down/shirt-collar_button-down' + selected.value;
      this.collars = 'imge/Shirt_Side/' + '2.shirt-collar/shirt-collar_button-down/shirt-collar_button-down' + selected.value;
      this.shirtfit = 'imge/Shirt_Front/' + '1.shirt-fitting/shirt-fitting_regular-fit/shirt-fitting_regular-fit' + selected.value;
      this.shirtBfit = 'imge/Shirt_Back/' + '1.shirt-fitting/shirt-fitting_regular-fit/shirt-fitting_regular-fit' + selected.value;
      this.shirtSfit = 'imge/Shirt_Side/' + '1.shirt-fitting/shirt-fitting_regular-fit/shirt-fitting_regular-fit' + selected.value;
      this.chestpocket = 'imge/Shirt_Front/' + '3.shirt-pocket/shirt-pocket_angle-corner_1-pocket/shirt-pocket_angle-corner_1-pocket' + selected.value;
      this.chestSpocket = 'imge/Shirt_Side/' + '3.shirt-pocket/shirt-pocket_angle-corner_1-pocket/shirt-pocket_angle-corner_1-pocket' + selected.value;
      this.shirtbutton = 'imge/Shirt_Front/5.shirt-placket/shirt-placket_french-front/shirt-button/shirt-button-101.png';
      this.shirtSbutton = 'imge/Shirt_Side/5.shirt-placket/shirt-placket_french-front/shirt-button/shirt-button-101.png';
      this.shirtbuttonhole = 'imge/Shirt_Front/5.shirt-placket/shirt-placket_french-front/shirt-button-hole/shirt-button-hole' + selected.value;
      this.shirtbuttonthread = 'imge/Shirt_Front/5.shirt-placket/shirt-placket_french-front/shirt-button-thread/shirt-button-thread' + selected.value;
      this.shirtSbutton = 'imge/Shirt_Side/5.shirt-placket/shirt-placket_french-front/shirt-button/shirt-button-101.png';
      this.shirtSbuttonhole = 'imge/Shirt_Side/5.shirt-placket/shirt-placket_french-front/shirt-button-hole/shirt-button-hole' + selected.value;
      this.shirtbuttonSthread = 'imge/Shirt_Side/5.shirt-placket/shirt-placket_french-front/shirt-button-thread/shirt-button-thread' + selected.value;
    },

    // updateFabric() {
    //   // var selected;
    //   // // if (document.getElementById('fabric1').click) {
    //   // //   var selected = document.getElementById('fabric1').getAttribute('value')
    //   // // } else if (document.getElementById('fabric2').checked) {
    //   // //   var selected = document.getElementById('fabric2').getAttribute('value')
    //   // // }

    // },

    modalFunction() {
      this.fitPicked = $("input[name='fit']:checked").val()
      this.customcuffPicked = $("input[name='customcuff']:checked").val()
      this.cuffPicked = $("input[name='cuff']:checked").val()
      this.sleevePicked = $("input[name='sleeve']:checked").val()
      this.elbowpatchPicked = $("input[name='elbowpatch']:checked").val()
      this.tuckPicked = $("input[name='tuck']:checked").val()
      this.chestpocketPicked = $("input[name='chestpocket']:checked").val()
      this.collarPicked = $("input[name='collar']:checked").val()
      this.customcollarPicked = $("input[name='customcollar']:checked").val()
      this.placketPicked = $("input[name='placket']:checked").val()
      this.backpleatPicked = $("input[name='backpleat']:checked").val()
    },
  },
})
