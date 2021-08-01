# API DOCUMENTATION

RESTFul Endpoints

### GET /customers

| Method | Route      | Description                    |
| ------ | ---------- | ------------------------------ |
| GET    | /customers | Menampilkan seluruh `Customer` |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    [
      {
        "id": 1,
        "fullName": "Dimas Satria",
        "email": "dimas@gmail.com",
        "address": "Jl. Antena II Radio Dalam, Jakarta Selatan",
        "phone": "08953923790",
        "createdAt": "2021-08-01T12:56:14.486Z",
        "updatedAt": "2021-08-01T12:56:14.486Z"
      },
      ...
    ]
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route          | Description                      |
| ------ | -------------- | -------------------------------- |
| GET    | /customers/:id | Menampilkan `Customer` sesuai id |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    {
      "id": 1,
      "fullName": "Dimas Satria",
      "email": "dimas@gmail.com",
      "address": "Jl. Antena II Radio Dalam, Jakarta Selatan",
      "phone": "08953923790",
      "createdAt": "2021-08-01T12:56:14.486Z",
      "updatedAt": "2021-08-01T12:56:14.486Z"
    }
    ```

  - 404 : Customer not found

    ```json
    {
      "message ": "Customer not found."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route               | Description                      |
| ------ | ------------------- | -------------------------------- |
| GET    | /customers/:id/edit | Menampilkan form edit `Customer` |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    {
      "id": 1,
      "fullName": "Dimas Satria",
      "email": "dimas@gmail.com",
      "address": "Jl. Antena II Radio Dalam, Jakarta Selatan",
      "phone": "08953923790",
      "createdAt": "2021-08-01T12:56:14.486Z",
      "updatedAt": "2021-08-01T12:56:14.486Z"
    }
    ```

  - 404 : Customer not found

    ```json
    {
      "message ": "Customer not found."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route                    | Description                              |
| ------ | ------------------------ | ---------------------------------------- |
| GET    | /customers/:id/show-cart | Menampilkan keranjang sesuai id customer |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    [
      {
        "id": 2,
        "CustomerId": 1,
        "ProductId": 1,
        "qty": 1,
        "createdAt": "2021-08-01T12:56:14.486Z",
        "updatedAt": "2021-08-01T12:56:14.486Z",
        "Product": {
          "id": 1,
          "name": "ACER Swift 1 Fresh",
          "description": "Processor: Intel® Pentium® Silver N6000 | 4GB DDR4 | Intel UHD Graphics",
          "price": 5800000,
          "stock": 12,
          "category": "Laptop",
          "brand": "Acer",
          "image": "https://pemmzchannel.com/wp-content/uploads/2020/11/Screenshot-778-min.png",
          "createdAt": "2021-08-01T11:35:10.379Z",
          "updatedAt": "2021-08-01T11:35:10.379Z"
        },
        ...
      }
    ]
    ```

  - 404 : Customer not found

    ```json
    {
      "message ": "Customer not found."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route                            | Description                              |
| ------ | -------------------------------- | ---------------------------------------- |
| GET    | /customers/:id/show-transactions | Menampilkan transaksi sesuai id customer |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    [
      {
        "id": 1,
        "CustomerId": 1,
        "total": 12000000,
        "status": "unpaid",
        "createdAt": "2021-08-01T11:35:10.388Z",
        "updatedAt": "2021-08-01T11:35:10.388Z"
      },
      ...
    ]
    ```

  - 400 : Customer not found

    ```json
    {
      "message ": "Customer not found."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

### POST /customers

| Method | Route          | Description                             |
| ------ | -------------- | --------------------------------------- |
| POST   | /customers/add | Menambahkan `Customer` kedalam database |

- Request

  - Request Header : none
  - Request Body :

    ```json
    {
      "fullName": "Wahyu Putra",
      "email": "wahyuputra@gmail.com",
      "address": "Jl. Sunan Giri, No.12, Tangerang",
      "phone": "087895903661"
    }
    ```

- Response

  - Created (201)

    ```json
    {
      "message": "Customer added successfully."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route                 | Description            |
| ------ | --------------------- | ---------------------- |
| POST   | /customers/:id/update | Mengubah data customer |

- Request

  - Request Header : none
  - Request Body :

    ```json
    {
      "fullName": "Wahyu Putra P",
      "address": "Jl. Sunan Giri, No.12, RT03/RW06 Tangerang",
      "phone": "087895903661"
    }
    ```

- Response

  - Success (200)

    ```json
    {
      "message": "Customer updated successfully."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route                          | Description                                                               |
| ------ | ------------------------------ | ------------------------------------------------------------------------- |
| POST   | /customers/:id/pay-transaction | Mengirimkan bukti pembayaran dan mengubah status transaksi menjadi "paid" |

- Request

  - Request Header : none
  - Request Body :

    ```json
    {
      "CustomerId": 1,
      "TransactionId": 2,
      "proof": "https://via.placeholder.com/150"
    }
    ```

- Response

  - Success (200)

    ```json
    {
      "message": "Proof payment added successfully."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

---

### GET /products

| Method | Route     | Description                   |
| ------ | --------- | ----------------------------- |
| GET    | /products | Menampilkan seluruh `Product` |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    [
      {
        "id": 1,
        "name": "ACER Swift 1 Fresh",
        "description": "Processor: Intel® Pentium® Silver N6000 | 4GB DDR4 | Intel UHD Graphics",
        "price": 5800000,
        "stock": 12,
        "category": "Laptop",
        "brand": "Acer",
        "image": "https://pemmzchannel.com/wp-content/uploads/2020/11/Screenshot-778-min.png",
        "createdAt": "2021-08-01T11:35:10.379Z",
        "updatedAt": "2021-08-01T11:35:10.379Z"
      },
      ...
    ]
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route              | Description                   |
| ------ | ------------------ | ----------------------------- |
| GET    | /products/:id/edit | Menampilkan form edit product |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    {
      "id": 1,
      "name": "ACER Swift 1 Fresh",
      "description": "Processor: Intel® Pentium® Silver N6000 | 4GB DDR4 | Intel UHD Graphics",
      "price": 5800000,
      "stock": 12,
      "category": "Laptop",
      "brand": "Acer",
      "image": "https://pemmzchannel.com/wp-content/uploads/2020/11/Screenshot-778-min.png",
      "createdAt": "2021-08-01T11:35:10.379Z",
      "updatedAt": "2021-08-01T11:35:10.379Z"
    }
    ```

  - 404 : Product not found

    ```json
    {
      "message": "Product not found"
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route                | Description       |
| ------ | -------------------- | ----------------- |
| GET    | /products/:id/delete | Menghapus product |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    {
      "message": "Product deleted successfully."
    }
    ```

  - 404 : Product not found

    ```json
    {
      "message": "Product not found."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

### POST /products

| Method | Route         | Description                             |
| ------ | ------------- | --------------------------------------- |
| POST   | /products/add | Menambahkan `Product` ke dalam database |

- Request

  - Request Header : none
  - Request Body :
    ```json
    {
      "name": "ACER Swift 1 Fresh",
      "description": "Processor: Intel® Pentium® Silver N6000 | 4GB DDR4 | Intel UHD Graphics",
      "price": 5800000,
      "stock": 12,
      "category": "Laptop",
      "brand": "Acer",
      "image": "https://pemmzchannel.com/wp-content/uploads/2020/11/Screenshot-778-min.png"
    }
    ```

- Response

  - Created (201)

    ```json
    {
      "message": "Product added successfully."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route              | Description           |
| ------ | ------------------ | --------------------- |
| POST   | /products/:id/edit | Mengubah data product |

- Request

  - Request Header : none
  - Request Body :
    ```json
    {
      "name": "ACER Swift 1 Fresh",
      "description": "Processor: Intel® Pentium® Silver N6000 | 4GB DDR4 | Intel UHD Graphics",
      "price": 5800000,
      "stock": 12,
      "category": "Laptop",
      "brand": "Acer",
      "image": "https://pemmzchannel.com/wp-content/uploads/2020/11/Screenshot-778-min.png"
    }
    ```

- Response

  - Created (201)

    ```json
    {
      "message": "Product updated successfully."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

---

### GET /carts

| Method | Route             | Description         |
| ------ | ----------------- | ------------------- |
| GET    | /carts/:id/delete | Menghapus keranjang |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    {
      "message": "Cart deleted successfully."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

### POST /carts

| Method | Route      | Description        |
| ------ | ---------- | ------------------ |
| POST   | /carts/add | Menambah keranjang |

- Request

  - Request Header : none
  - Request Body :
    ```json
    {
      "CustomerId": 1,
      "ProductId": 1,
      "qty": 3
    }
    ```

- Response

  - Created (201)

    ```json
    {
      "message": "Cart added successfully."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

---

### GET /transactions

| Method | Route         | Description                 |
| ------ | ------------- | --------------------------- |
| GET    | /transactions | Menampilkan semua transaksi |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    [
      {
        "id": 1,
        "CustomerId": 1,
        "total": 12000000,
        "status": "unpaid",
        "createdAt": "2021-08-01T11:35:10.388Z",
        "updatedAt": "2021-08-01T11:35:10.388Z",
        "Customer": {
          "id": 1,
          "fullName": "Dimas Satria",
          "email": "dimas@gmail.com",
          "address": "Jl. Antena II Radio Dalam, Jakarta Selatan",
          "phone": "0895392379068",
          "createdAt": "2021-08-01T11:35:10.354Z",
          "updatedAt": "2021-08-01T11:35:10.354Z"
        }
      },
      ...
    ]
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route             | Description                     |
| ------ | ----------------- | ------------------------------- |
| GET    | /transactions/:id | Menampilkan transaksi sesuai id |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    {
      "id": 1,
      "CustomerId": 1,
      "total": 12000000,
      "status": "unpaid",
      "createdAt": "2021-08-01T11:35:10.388Z",
      "updatedAt": "2021-08-01T11:35:10.388Z",
      "Customer": {
        "id": 1,
        "fullName": "Dimas Satria",
        "email": "dimas@gmail.com",
        "address": "Jl. Antena II Radio Dalam, Jakarta Selatan",
        "phone": "0895392379068",
        "createdAt": "2021-08-01T11:35:10.354Z",
        "updatedAt": "2021-08-01T11:35:10.354Z"
      }
    }
    ```

  - 404 : Transaction not found

    ```json
    {
      "message": "Transaction not found."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route                                           | Description                                  |
| ------ | ----------------------------------------------- | -------------------------------------------- |
| GET    | /transactions/:id/payment-confirmation/accepted | Mengubah status transaksi menjadi "accepted" |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    {
      "message": "Transaction status updated successfully."
    }
    ```

  - 404 : Transaction not found

    ```json
    {
      "message": "Transaction not found."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route                                            | Description                                   |
| ------ | ------------------------------------------------ | --------------------------------------------- |
| GET    | /transactions/:id/payment-confirmation/cancelled | Mengubah status transaksi menjadi "cancelled" |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    {
      "message": "Transaction status updated successfully."
    }
    ```

  - 404 : Transaction not found

    ```json
    {
      "message": "Transaction not found."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

| Method | Route                        | Description                              |
| ------ | ---------------------------- | ---------------------------------------- |
| GET    | /transactions/status/:status | Menampilkan transaksi berdasarkan status |

- Request

  - Request Header : none
  - Request Body : none

- Response

  - Success (200)

    ```json
    [
      {
        "id": 1,
        "CustomerId": 1,
        "total": 12000000,
        "status": "unpaid",
        "createdAt": "2021-08-01T11:35:10.388Z",
        "updatedAt": "2021-08-01T11:35:10.388Z",
        "Customer": {
          "id": 1,
          "fullName": "Dimas Satria",
          "email": "dimas@gmail.com",
          "address": "Jl. Antena II Radio Dalam, Jakarta Selatan",
          "phone": "0895392379068",
          "createdAt": "2021-08-01T11:35:10.354Z",
          "updatedAt": "2021-08-01T11:35:10.354Z"
        }
      },
      ...
    ]
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```

### POST /transactions

| Method | Route      | Description        |
| ------ | ---------- | ------------------ |
| POST   | /transactions/add | Menambah transaksi |

- Request

  - Request Header : none
  - Request Body :
    ```json
    {
      "CustomerId": 1
    }
    ```

- Response

  - Created (201)

    ```json
    {
      "message": "Transaction added successfully."
    }
    ```

  - Failure (500) :

    ```json
    {
        message: <internal_memory_error>
    }
    ```
