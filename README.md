# 📱 Phonebook Application (GoIT React HW-06)

This project is a contact management application where state management is handled using **Redux Toolkit** and data persistence is ensured with **Redux Persist**.

## 🚀 Project Requirements

- Create a repository named `goit-react-hw-06`. 📁
- Provide two links: one to the **source files** and one to the **live page** hosted on [Vercel](https://vercel.com/). 🔗
- The project must be built using **Vite**. ⚡
- There should be no errors or warnings in the console when running the code. ✅
- Each component must have its own folder in `src/components`, containing the `.jsx` file and a matching `.module.css` file. 📂
- Components must be exported using **default export**. 📤
- The code must be clean, readable, and formatted with **Prettier**. ✨
- The primary state management library must be **Redux Toolkit**. 🛠️
- Styling must be implemented using **CSS Modules**. 🎨

---

## 📖 Phonebook Task

Refactor your "Phonebook" application from the third module. Replace the local React state management with global state using the [Redux Toolkit](https://redux-toolkit.js.org/) library. 🔄

## 📁 Folders and Files

Create a folder named `redux` inside the `src` directory to store Redux-related files:

- `store.js` – The main store configuration file. 🏪
- `contactsSlice.js` – Slice for managing contacts. 👥
- `filtersSlice.js` – Slice for managing filters. 🔍

## 🏗️ Initial State

The Redux initial state should be structured as follows:

```json
{
  "contacts": {
    "items": []
  },
  "filters": {
    "name": ""
  }
}
```

We separate the state into two slices: **contacts** (for the `items` array) and **filters** (for the `name` field). 🧩

## 👥 Contacts Slice

Define the contacts slice in `contactsSlice.js` using the `createSlice()` function.

**Actions to be dispatched:**

- `addContact` — Adds a new contact to the `items` array. ➕
- `deleteContact` — Removes a contact from the `items` array by ID. 🗑️

**Selector functions for `useSelector`:**

- `selectContacts` — Returns the list of contacts from the `items` property. 📋

## 🔍 Filter Slice

Define the filter slice in `filtersSlice.js` using the `createSlice()` function.

**Actions to be dispatched:**

- `changeFilter` — Updates the filter value in the `name` property. ✍️

**Selector functions for `useSelector`:**

- `selectNameFilter` — Returns the current filter value from the `name` property. 🎯

---

## ⚡ React Redux Integration

Connect your React components to the Redux logic using the `useSelector` and `useDispatch` hooks from the [React Redux](https://react-redux.js.org/) library. 🔌

Except for the `Contact` card in the contact list, **all components should not receive props**. Instead, they should use the `useSelector` hook and slice selectors to access necessary data.

To dispatch actions, components should use the `useDispatch` hook:

- `ContactsForm` dispatches the contact addition action upon submission. 📝
- `Contact` card dispatches the delete action when the delete button is clicked. ❌
- `SearchBox` dispatches the filter change action as the user types in the input field. ⌨️

## 💾 Redux Persist Library

Use the [Redux Persist](https://www.npmjs.com/package/redux-persist) library to save the contacts array in **Local Storage**. 📦

**In `store.js`:**

- Configure the persistence settings to save the `items` field from the contacts slice. ⚙️
- Use `persistReducer` to apply the configuration to the contacts reducer. 🛠️
- Create a `persistor` using `persistStore` for the `PersistGate` component. 🚪
