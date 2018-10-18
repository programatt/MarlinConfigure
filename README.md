# MarlinConfigure
Cross Platform GUI for managing Marlin Firmware configurations and flashing the Marlin Firmware onto devices

### Why this exists
The 3d printing world is obviously a large group of hackers, makers, etc. But, there is a need for better tooling that can get newer, unexperienced people off the ground running. A visual tool that does a lot of the grunt work around default values and simple mods for common printers will allow less experienced people to successfully change how their setup functions. Ideas from Ideas section might make the dev process for Marlin itself easier to do.

### POC
* working electron/create-react-app that builds on travis ci (convert to open source so its free)
* unit test framework setup
* documentation setup with tutorial
* ability to clone official Marlin repo branch and create a configuration from example folder that's saved locally with a custom name
* ability to use arduino cli (if possible) to compile/flash or take configuration and use arduino ide then to do same.
* simple set of changes available (can set bed dimensions or something like that)

### Ideas
* Cross platform tool (OSX, Linux, Windows) so leaning towards Electron and React (create-react-app) due to familiarity.
based on https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c and/or
https://getstream.io/blog/takeaways-on-building-a-react-based-app-with-electron/
* Automated testing and documentation generation because it's good and I want to improve myself.
* Workspace stored on local file system. Ability to git checkout branches of official marlin repo or your own repo and make different profiles that can be quickly compiled/flashed to a board using the arduino cli https://github.com/arduino/arduino-cli
* Quick way to visualize differences between profile changes without having to rely on just descriptions in text
* Library of parts (motors, sensors, boards, fans, thingiverse parts, etc) with sensible default values for them? AKA known starting configuration values to try out. For example. I'm adding an SN-04 sensor to the Anet A8 using this mount from thingiverse. I know the offset from the hotend is X,Y,Z and I need to enable Flags A,B,C to enable auto bed leveling.

### Limitations and Challenges
* Certain types of changes will be inherently difficult to automate. Especially ones around new features to Marlin due to code refactoring. Not all things about a configuration will be wizard-able in a nice way. Hence the need for the ability to access the configuration.h and configuration_adv.h directly if need be.
* If we expose the part library or make it something that people can contribute to directly, how do we make sure that the *known* values don't end up breaking people's printers and angering people? I'm not an EE, and don't have the skills to know what's a bad value or not.

### Things to Figure out
* How to write to filesystem and use git from node
* SQLite db for data?
* How to evolve existing configurations (if at all) when marlin changes come out. Probably will just need a way to detect that the branch the profile is based on doesn't compile? Might be very challenging!
* What's the mechanism for codegen once the changes are configured? Right now probably mapping "features" to a regex that changes the Configuration.h and Configuration_adv.h? Probably will need take a look at the examples folder to see what things are being changed for diff printers.
* Is the arduino cli viable or will end result still need arduino IDE to compile/flash. If yes how to manage which add-ons need to be installed for different boards/parts?
* Common set of Enable/Disable operations that just take simple boolean flag and know what to comment out/uncomment based on what it is
* Common set of Value operations that change parameters in relatively stable ways that can be automated (bed size, Z height, extrusion steps, acceleration, jerk, etc)
* How to expose the guts when existing patterns aren't enough. Still allow people to get to the raw configuration when necessary in a way that doesn't just make them.
* Preventing link rot for things like the parts catalog and thingiverse things.
* Github auth and off device persistence? Use a github repo or dropbox or something?
* UI theme/standards
