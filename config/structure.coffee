# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Messages"
      id: "index"
      location: "example#messages" # Supersonic module#view type navigation
    }
    {
      title: "Settings"
      id: "settings"
      location: "example#settings"
    }
    {
      title: "API"
      id: "api"
      location: "message#index"
    }
  ]

  # rootView:
  #   location: "example#getting-started"

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
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
