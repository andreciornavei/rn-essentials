# rn-essentials

## components

### Button:

#### **Properties:**
#### **[ButtonType]**
| property | type | default value | description |
| -- | -- | -- | -- |
| label | string | undefined | The text value inside button |
| color | ColorValue | undefined | The color of the text value |
| backgroundColor | ColorValue | undefined | The color of the container background |
| containerStyle | CSSProperties | undefined | A ViewStyle to customize the button container |
| textStyle | TextStyle | undefined | A TextStyle to customize the button text |
| onPress | Function: void | undefined | An function to calles when press the button | 
| leftIcon | [ButtonIconType]() | undefined | A left icon for the button |
| rightIcon | [ButtonIconType]() | undefined | A right icon for the button |
| leftImage | [ButtonImageType]() | undefined | A left image for the button |
| rightImage | [ButtonImageType]() | undefined | A right image for the button |
| wrap | boolean | true | If the button is wrapped to prevent automatic expands |
| center | boolean | false | If button needs to center the text (_by default if is left positioned_) |
| shadow | boolean | false | If should render a shadow to the button |
| loading | boolean | false | If should render an loading indicator |
| loadingTheme | [ButtonLoadingType]() | undefned | The loading indicator theme |
| disabled | boolean | false | If should disable the button |
| theme | [ThemeType]() | undefined | The button theme |
| size | [SizeType]() | undefined | The button size |
| shape | [ShapeType]() | undefined | The button shape |

---
#### **[ButtonIconType]**
| property | type | required | default value | description |
| -- | -- | -- | -- | -- |
| pack | [IconPackType]() | yes | undefined | Expo icon package name |
| name | string | yes | undefined | Name of the icon from expo icon pack |
| size | number | no | undefined | The size of the icon |
| color | string | no | undefined | The color of the icon |
| space | number | no | 5 | The space in pixels between icon and other components inside the button |