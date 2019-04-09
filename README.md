<h1 align="center">
  Keychain
</h1>
<p align="center">Keyhole's react component library and design system.</p>

---

## 🔧 Installation

### Download

```bash
npm i -S @keyholeco/keychain
```

## 🤔 FAQ:

<details>
  <summary>
    Dev workflow from keychain to keyhole:
  </summary>

- clone a version of keychain locally:
```bash
git clone git@github.com:keyholeco/keychain.git
```
- link your local version of keychain to your global npm modules
```bash
cd path/to/keychain
npm link
```
- link your global version of keychain to keyhole
```bash
cd path/to/keyhole/app
npm link @keyholeco/keychain
```
- restart your dev server
```bash
npm run dev
```
- success! editing your keychain components will automagically apply to keyhole!
</details>