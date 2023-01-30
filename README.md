## 1: Material-UI App Bar

- `components/Header.js` içine AppBar componentı koyalım, style ekledimm

  https://material-ui.com/components/app-bar/

- Headerda Sayfalar diye bir sekme olsun bunun için Menu kullandım.
  https://material-ui.com/components/menus/

- react-router-dom'daki Link kullanarak bu MenuItemlere basıldığında /home veya /tictactoe sayfasına yönlendirildi.
  https://reactrouter.com/web/api/Link

## 2: React-Router Switch

- pages'ta yeni klasör oluşturuldu, adı Tictactoe içine index.js oluşturuldu.

- App.js'in içinde Switch kullanarak bu oluşturulan index.js return edildi.

## 3: Material-UI Layout

- Bu index.js bir Container return edildi.
  https://material-ui.com/components/container/

- Container içinde bir grid oluşturuldu(container grid). Bu gridin içinde 3x3 grid oluşturuldu(x-o-x oyunu tablosu gibi).
  https://material-ui.com/components/grid/

## 4: Material-UI Button

- Bir container grid daha oluşturuldu, bunun içinde ButtonGroup oluşturuldu.
  https://material-ui.com/components/button-group/
  https://material-ui.com/components/buttons/

- 1. button: Start Game, 2. button: Resign

## 5: Material-UI Switch

- ButtonGroupların altında ve üstüne Switch oluşturuldu.
  https://material-ui.com/components/switches/

- Switch'lerin amacı X veya O ile başlayıp başlamama durumu ve ilk bizim mi yoksa bilgisayarın mı oynayacağını belirlemektir.
