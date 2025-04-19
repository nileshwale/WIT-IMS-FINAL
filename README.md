## Inventory Management System

video link - https://drive.google.com/file/d/1syYsqOHh2MNVmQ4ZlKngkr9C8FRmTJTB/view?usp=sharing

The **Inventory Management System (IMS)** is a full-stack web application designed to help efficiently manage inventory items with an intuitive and responsive UI. Built using **Ionic + Angular** on the frontend and **Node.js + Express** on the backend, it offers powerful features like user authentication, role-based access control, image uploads, CSV export, and more.
 
 ---
 
 ## 🚀 Features
 
 - ✅ **User Authentication** (JWT-based)
 - ✅ **Role-Based Access Control** (Admin / Viewer)
 - ✅ **Add, Edit, Delete Inventory Items** (Admin only)
 - ✅ **Search Functionality** across inventory
 - ✅ **Download Inventory as CSV**
 - ✅ **Responsive UI** with cards and thumbnails
 - ✅ **Modern and Clean Interface**
 
 ---
 
 ## 🔧 Technologies Used
 
 ### 📱 Frontend
 - **Ionic + Angular**
 - **HTML, SCSS** (Custom-styled dashboard)
 - **HttpClient** for API integration
 - **Router**, **ModalController**, **AlertController** (Ionic components)
 
 ### 🖥️ Backend
 - **Node.js + Express**
 - **jsonwebtoken** for secure sessions
 - **fs** module for reading/writing `inventory.json` and `users.json`
 - **cors**, **body-parser** for API communication
 
 ---
 
 ## 🧰 Project Structure
 IMS-Project/
 │
 ├── backend/
 │   ├── index.js               # Main server logic
 │   ├── inventory.json         # Inventory data store
 │   └── users.json             # Registered users
 │
 ├── frontend/
 │   ├── src/
 │   │   ├── app/
 │   │   │   ├── pages/
 │   │   │   │   ├── dashboard/
 │   │   │   │   │   ├── dashboard.page.ts
 │   │   │   │   │   ├── dashboard.page.html
 │   │   │   │   │   └── dashboard.page.scss
 │   │   │   │   ├── login/
 │   │   │   │   ├── signup/
 │   │   │   └── components/
 │   │   │       └── add-item/
 │   │   │           ├── add-item.component.ts
 │   │   │           ├── add-item.component.html
 │   │   │           └── add-item.component.scss
 │   └── ...
 
 
 1. Navigate to the backend directory:
    ```bash
    cd backend
 Install dependencies:
 
 
 npm install express cors body-parser jsonwebtoken


 
 🔜 Frontend Setup
 Navigate to the frontend directory:
 
 
 cd frontend
 Install Ionic CLI (if not installed):
 
 npm install -g @ionic/cli
 Install project dependencies:
 
 
 npm install
 Run the app:
 
 
 ionic serve
 🔐 Default Admin Credentials
 Note: Sign-up allows only "viewer" role by default. To add an admin user, manually update the users.json file:
 
 
 {
   "email": "admin@example.com",
   "password": "admin123",
   "role": "admin"
 }
 🗃️ Sample Inventory Data Format (inventory.json)
 [
   {
     "ItemName": "Laptop",
     "Category": "Electronics",
     "Quantity": 10,
     "Price": 50000,
     "Supplier": "HP",
     "RestockDate": "2025-04-30",
     "Image": "data:image/png;base64,..."
   }
 ]
 📤 CSV Export Format
