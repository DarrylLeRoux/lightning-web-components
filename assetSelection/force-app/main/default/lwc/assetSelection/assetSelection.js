import { LightningElement, api } from "lwc";

// import image, svg, or mask options from another js file?
// import {img, svg, mask} from "./data"?

const ASSET_PATH = "/sfsites/c/resource/visualAssets/";

export default class AssetSelection extends LightningElement {
  @api type;
  @api imageColor;
  @api imageChoice;

  // initial value
  value = "";

  // eventListener for onchange for combobox
  handlePicklistChange(event) {
    this.value = event.detail.value;
  }

  // combobox selections
  get options() {
    return [
      { label: "Meh", value: "09.People/icn_emoji_meh.svg" },
      { label: "Happy", value: "09.People/icn_emoji_happy.svg" },
      { label: "Sad", value: "09.People/icn_emoji_sad.svg" },
      { label: "smirk", value: "09.People/icn_emoji_smirk.svg" },
      { label: "nametag", value: "09.People/icn_nametag.svg" },
      { label: "people_add", value: "09.People/icn_people_1_add.svg" },
      {
        label: "people_approved",
        value: "09.People/icn_people_1_approved.svg"
      },
      { label: "people_edit", value: "09.People/icn_people_1_edit.svg" },
      { label: "people_fail", value: "09.People/icn_people_1_edit.svg" },
      {
        label: "people_international",
        value: "09.People/icn_people_1_international.svg"
      },
      { label: "people_lock", value: "09.People/icn_people_1_lock.svg" },
      { label: "people_nametag", value: "09.People/icn_people_1_nametage.svg" },
      { label: "people_remove", value: "09.People/icn_people_1_remove.svg" },
      {
        label: "people_international",
        value: "09.People/icn_people_1_international.svg"
      },
      {
        label: "people_settings",
        value: "09.People/icn_people_1_settings.svg"
      },
      { label: "people_stars", value: "09.People/icn_people_1_stars.svg" },
      { label: "people_strike", value: "09.People/icn_people_1_strike.svg" },
      { label: "people_1", value: "09.People/icn_people_1.svg" },
      { label: "people_2_add", value: "09.People/icn_people_2_add.svg" },
      { label: "people_2", value: "09.People/icn_people_2.svg" },
      { label: "people_3_add", value: "09.People/icn_people_3_add.svg" },
      { label: "people_3", value: "09.People/icn_people_3.svg" },
      {
        label: "people_collaboration",
        value: "09.People/icn_people_collaboration.svg"
      },
      { label: "people_hand", value: "09.People/icn_people_hand.svg" },
      { label: "people_profile", value: "09.People/icn_people_profile.svg" }
    ];
  }

  // get path of asset
  get path() {
    let folder = this.getFolder(this.imageChoice);
    let file = this.getFile(this.imageChoice);

    //build up our url
    let result = this.pathMerge();

    // return ASSET_PATH + this.ImageChoice renders smiley by
    // return ASSET_PATH + this.value;

    return result;
  }

  //Create a method to get file portion
  getFile(selection) {
    //string manipulation on the choice to grab the file name value
  }

  //Create a method to get folder portion
  getFolder(selection) {
    //string manipulation on the choice to grab the folder name value
  }

  //Create a method that merges the path options based on options selected in properties
  pathMerge(folder, file) {
    if (folder === file) {
      return ASSET_PATH + file + ".svg";
    }
    return ASSET_PATH + folder + "/" + file + ".svg";
  }
}

/*

TODO:

1. Initailly render the type of elements by means of imageChoice, SVG, or mask
2. Have a file explorer / conditional picklist of elements available based on prior selection: 
  ie. if img chosen, render the img options available, if svg, render the svg options
3. If imageColor options are available - provide an option (Checkbox / picklist) of color to render the element
4. Return the class of element if needed
5. Return svg source code if needed
6. Return img tag if needed

Questions:

XML:
How do you interact with the <property></property> tag in the xml?
How do you render a component type based off of the img, svg and mask in the <property></property> tag in the xml?
How do you implement a color picker in xml targetconfigs? Is this an additional component? Or a standard component?

Data Manipulation:
How can you map through the assets? 
Can they be stored as a JSON file perhaps?
Having a combobox of over 100 hundred options is untidy - would be best to store in another file as data

Interacting with rendered element (color, fill, svg code etc.)
Is this based off of the XML <property></property>? Is there an option that allows us to grab these details?
*/
