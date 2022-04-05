# ICNS-js: An SDK for Interacting with ICNS Canisters
![image](https://user-images.githubusercontent.com/73345016/161631070-a2049e53-32b7-4068-b3ad-135ab2f51501.png)

> 💬 All feedback is welcomed! [Set up an issue](https://github.com/Psychedelic/icns-js/issues).

ICNS is an open internet service built on the Internet Computer blockchain. The core protocol maps human-readable names to machine-readable crypto addresses and other customized user metadata, helping to remove the burden of memorizing crypto addresses. **Your ICNS name will be your passport to the Web3 ecosystem.**

- [Checkout Our Documentation](https://www.notion.so/icns-id/ICNS-js-Docs-29262b91ef334b39b2416fd46de45a6e)
- [Visit Our Website](https://icns.id)
- [Read Our Blog](https://icns-id.medium.com/)


ICNS-js provides interfaces for easily wiring up to and creating interactions with the four main ICNS canisters:
- The Registrar Canister
- The Registry Canister
- The Resolver Canister
- The Reverse Registrar Canister

<br>

---

## 📚 Documentation

Looking to get ICNS-js setup in your project? The ICNS docs are your best bet!

Get started with our documentation ➡️ [here](https://www.notion.so/icns-id/ICNS-js-Docs-29262b91ef334b39b2416fd46de45a6e).

<br>

---

## 📥 Installation 

ICNS-js can be installed locally from our Github repository. To do so you're going to need a [personal access token](https://github.com/settings/tokens) with the following configurations:

- **repo**
- **read:packages**

Next, authenticate yourself via `npm login` command using your Github email for the **username** and the **personal access token** as your **password:**

```bash
npm login --registry=https://npm.pkg.github.com --scope=@psychedelic
```

The last thing we’ve got to do before installing is set your npm configuration so that when you run `npm install @psychedelic/`, npm will pull from Github instead of its own registry.

To do this, **we have two options:**

1) Run the following command
```bash
npm config set @psychedelic:registry https://npm.pkg.github.com
```

2) Add a `.npmrc` file to your project's root directory and add the following line to the file:

```bash
@psychedelic:registry=https://npm.pkg.github.com
```

You're all set! Install Sonic-js into your project with the following command:

```bash
yarn add @psychedelic/sonic-js
```

<br>

---

## 🏆 Acknowledgements
ICNS-js is modified from [Sonic-js](https://github.com/Psychedelic/sonic-js).
