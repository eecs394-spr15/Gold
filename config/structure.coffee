# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Messages"
      id: "index"
      location: "message#index"
    }
    {
      title: "About"
      id: "settings"
      location: "example#settings"
    }
  ]

   #rootView:
   #  location: "example#launch"

  preloads: [

  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  initialView:
    id: "initialView"
    location: "example#launch"
