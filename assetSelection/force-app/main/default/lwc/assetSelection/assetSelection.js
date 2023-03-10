import { LightningElement, api } from "lwc";
import assetFolder from "@salesforce/resourceUrl/visualAssets";
// const ASSET_PATH = '/sfsites/c/resource/visualAssets/';

export default class AssetSelection extends LightningElement {
  @api type;
  @api imageColor;
  @api imageChoice;

  // FETCH METHOD TO GET FOLDERS
  //Create a method that merges the path options based on options selected in properties

  // get folders within the static resource
  connectedCallback() {
    const staticResourceUrl = new URL(
      assetFolder,
      // eslint-disable-next-line no-restricted-globals
      location.href
    ).href;

    fetch(staticResourceUrl)
      .then((response) => {
        console.log("Fetch response:", response);
        if (!response.ok) {
          throw new Error("Failed to load static resource");
        }
        return response.text();
      })
      .then((text) => {
        console.log("Static resource text:", text);
        if (text.contains("")) {
          console.log(text);
        }
        const folderNames = new Set();
        const lines = text.split("\n");
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line.startsWith("staticresources/visualAssets/")) {
            const parts = line.split("/");
            console.log("parts: ", parts);
            if (parts.length >= 3) {
              const folderName = parts[2];
              folderNames.push(folderName);
              if (folderName) {
                folderNames.add(Array.from(folderNames));
              }
            }
          }
        }
        console.log("Folder names:", folderNames);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // initial value
  value = "";
  folder = "";

  // handle combobox change
  handlePicklistChange(event) {
    this.value = event.detail.value;
    let selectedOption = this.options.find(
      (option) => option.value === this.value
    );
    this.folder = selectedOption.folder;
    console.log("In handlePicklistChange", this.folder, this.value);
  }

  // combobox selections
  get options() {
    return [
      { label: "Meh", folder: "09.People/", value: "icn_emoji_meh.svg" },
      { label: "Happy", folder: "09.People/", value: "icn_emoji_happy.svg" },
      { label: "Sad", folder: "09.People/", value: "icn_emoji_sad.svg" },
      { label: "smirk", folder: "09.People/", value: "icn_emoji_smirk.svg" },
      { label: "nametag", folder: "09.People/", value: "icn_nametag.svg" },
      {
        label: "people_add",
        folder: "09.People/",
        value: "icn_people_1_add.svg"
      },
      {
        label: "people_approved",
        folder: "09.People/",
        value: "icn_people_1_approved.svg"
      },
      {
        label: "people_edit",
        folder: "09.People/",
        value: "icn_people_1_edit.svg"
      },
      {
        label: "people_fail",
        folder: "09.People/",
        value: "icn_people_1_edit.svg"
      },
      {
        label: "people_international",
        folder: "09.People/",
        value: "icn_people_1_international.svg"
      },
      {
        label: "people_lock",
        folder: "09.People/",
        value: "icn_people_1_lock.svg"
      },
      {
        label: "people_nametag",
        folder: "09.People/",
        value: "icn_people_1_nametage.svg"
      },
      {
        label: "people_remove",
        folder: "09.People/",
        value: "icn_people_1_remove.svg"
      },
      {
        label: "people_international",
        folder: "09.People/",
        value: "icn_people_1_international.svg"
      },
      {
        label: "people_settings",
        folder: "09.People/",
        value: "icn_people_1_settings.svg"
      },
      {
        label: "people_stars",
        folder: "09.People/",
        value: "icn_people_1_stars.svg"
      },
      {
        label: "people_strike",
        folder: "09.People/",
        value: "icn_people_1_strike.svg"
      },
      { label: "people_1", folder: "09.People/", value: "icn_people_1.svg" },
      {
        label: "people_2_add",
        folder: "09.People/",
        value: "icn_people_2_add.svg"
      },
      { label: "people_2", folder: "09.People/", value: "icn_people_2.svg" },
      {
        label: "people_3_add",
        folder: "09.People/",
        value: "icn_people_3_add.svg"
      },
      { label: "people_3", folder: "09.People/", value: "icn_people_3.svg" },
      {
        label: "people_collaboration",
        folder: "09.People/",
        value: "icn_people_collaboration.svg"
      },
      {
        label: "people_hand",
        folder: "09.People/",
        value: "icn_people_hand.svg"
      },
      {
        label: "people_profile",
        folder: "09.People/",
        value: "icn_people_profile.svg"
      }
    ];
  }

  //Create a method  that extracts the folder name
  getFolder() {
    let folderPath = this.folder;
    //manipulate the string from the options array so that it returns the options attribute
    folderPath = folderPath.replace("/", "");
    console.log("getFolder", folderPath);
    return folderPath;
  }

  //Create a method that extracts the file name
  getFile() {
    let getFile = this.value;
    //manipulate the string from the options array so that it returns the file without the extension
    getFile = getFile.replace(".svg", "");
    console.log("getFile", getFile);
    return getFile;
  }

  // build your url
  pathMerge(getFolder, getFile) {
    const fullPath = assetFolder + "/" + getFolder + "/" + getFile + ".svg";
    console.log("pathMerge", fullPath);
    return fullPath;
  }

  // get the full path
  get assetFullPath() {
    if (!this.getFile() || !this.getFolder()) {
      return "No asset Selected";
    }
    return this.pathMerge(this.getFolder(), this.getFile());
  }
}
