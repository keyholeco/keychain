# Keychain
Keyhole's react component library and design system.


## 🔧 Installation

### Download

```bash
npm i -S @keyholeco/keychain
```

## 🤔 FAQ:

**Dev workflow from keychain to keyhole**

```bash
# clone a version of keychain locally if you haven't already
git clone git@github.com:keyholeco/keychain.git


# [IMPORTANT]: if you are using components with react hooks
# link keyhole's version of react to keychain
cd path/to/keychain
npm link /path/to/keyhole/app/node_modules/react

# link your local version of keychain to your global npm modules
cd path/to/keychain
npm link

# link your global version of keychain to keyhole
cd path/to/keyhole/app
npm link @keyholeco/keychain

# restart your dev server
npm run dev

# remember to unlink after you're done!
cd path/to/keychain
npm unlink path/to/keyhole/app/node_modules/react
npm unlink
cd path/to/keyhole/app
npm unlink @keyholeco/keychain
```

success! editing your keychain components will automagically apply to keyhole!

**note:** editing .styl files in keychain will not be reflected on keyhole until after a manual reload.

stretch goal: add a new gulp watcher in keyhole for all .styl files in the keychain directory, wait a second, then trigger a browsersync reload (with stream = true).
