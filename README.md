# easytech-btl-editor
Program to edit easytech BTL scenario files online.

## Editor
Try it [here](https://pyogenics.github.io/easytech-btl-editor/)
### Status
Not working.

## File format
BTL files store scenario information for games made by [easytech](https://www.ieasytech.com), this format is used by: World Conqueror, Glory of Generals and European War.

### Version
The first 4 bytes of any btl file store its' version.

***This table is still TODO and very incomplete***
| Games                                     | Version |
|-------------------------------------------|---------|
| World Conqueror 4, Glory of Generals      | 1       |
| European War 4                            | 2       |
| World Conqueror 3, Glory of Generals 2    | 3       |
| Glory of Generals 3                       | 32      |


### Header
- [World Conqueror 4](docs/header/WC4.md)
- [European War 4](docs/header/EW4.md)

## Credits
- [WC4 btl](https://european-war-4.boards.net/thread/9609/wc4-btl-guide)
- [EW4 btl](https://european-war-4.boards.net/thread/13480/ew4-btl-files)
