import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d65932ac-55af-4859-a9a9-c93a65151d06', '1Nasir12@yahoo.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=3', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('f4bffe12-23f4-457c-8a57-782e6e2e3de8', '7Neva39@hotmail.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=9', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('8c5c8c1c-8438-41a9-8285-2053ce5e8776', '13Nicholas_Yundt@gmail.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=15', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('8ae8cae3-ae2b-4418-88b8-81f4cdc5c2bd', '19Garrick65@yahoo.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=21', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('6fc2ab74-b435-432a-8e9b-3e67da6bd9bf', '25Edwardo.Donnelly@hotmail.com', 'Charlie', 'https://i.imgur.com/YfJQV5z.png?id=27', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('ef0b04cc-78e8-40e5-b37d-85450ed9e9da', '37Ray82@hotmail.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=39', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('e15596b0-0254-45ca-a610-15063e0fedbb', '43Sammy72@hotmail.com', 'Bob', 'https://i.imgur.com/YfJQV5z.png?id=45', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('81c1a22d-bbba-4a42-b34d-c69d2e15057d', '49Hal64@gmail.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=51', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('cec0d72c-bba7-4f9f-8185-a7916373a3fd', '55Yesenia17@gmail.com', 'Bob', 'https://i.imgur.com/YfJQV5z.png?id=57', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6a821f37-57eb-4233-aec2-d4cf730ebd12', 'System Maintenance', 'Check out the new features in the latest update.', 'Admin', '64Emory_Bode@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('416a0c22-d150-4872-98c4-ddd7e7159b50', 'New Feature Release', 'We will be undergoing maintenance at midnight.', 'Product Team', '71Nicola.Satterfield89@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('bbac74f0-9d90-4205-979f-193be64b4d21', 'System Maintenance', 'Your immediate action is required.', 'Product Team', '78Gavin_Balistreri@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', 'e15596b0-0254-45ca-a610-15063e0fedbb');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('95989d14-5125-4cfd-beb0-87137843a584', 'New Feature Release', 'Check out the new features in the latest update.', 'System', '85Brandt_Schulist53@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '6fc2ab74-b435-432a-8e9b-3e67da6bd9bf');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('00a0c761-3608-49f9-bad8-6d7ea6c91c41', 'Weekly Newsletter', 'Your immediate action is required.', 'Admin', '92Danial.OKon26@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '81c1a22d-bbba-4a42-b34d-c69d2e15057d');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('3039aa4d-f2fc-4712-a275-47b08c265498', 'New Feature Release', 'Heres what happened this week', 'Admin', '99Yesenia_Parisian@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', 'f4bffe12-23f4-457c-8a57-782e6e2e3de8');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('987a8de5-5aea-47b2-a37b-c0f7426be4df', 'System Maintenance', 'We will be undergoing maintenance at midnight.', 'Admin', '106Josh41@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('c342b4f0-360a-4a23-b76e-9a0f6fa77df3', 'Meeting Reminder', 'Check out the new features in the latest update.', 'Newsletter Bot', '113Cathryn.Schmidt-Abbott@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('620b7148-e852-403d-94a8-6d39282317c3', 'System Maintenance', 'Heres what happened this week', 'Admin', '120Aurore.Hand@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', 'e15596b0-0254-45ca-a610-15063e0fedbb');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('0e070690-687f-4c89-a254-218c7fc3d861', 'Meeting Reminder', 'Check out the new features in the latest update.', 'System', '127Lyda_Lehner93@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', 'cec0d72c-bba7-4f9f-8185-a7916373a3fd');

INSERT INTO "profile" ("id", "firstName", "lastName", "phoneNumber", "userId") VALUES ('f5abdcfc-bdbd-4523-b589-35ba5d411fc5', 'Liam', 'Williams', '5555555555', '6fc2ab74-b435-432a-8e9b-3e67da6bd9bf');
INSERT INTO "profile" ("id", "firstName", "lastName", "phoneNumber", "userId") VALUES ('631304ce-1663-49a7-9338-b729f2130cd1', 'Liam', 'Brown', '0987654321', '8c5c8c1c-8438-41a9-8285-2053ce5e8776');
INSERT INTO "profile" ("id", "firstName", "lastName", "phoneNumber", "userId") VALUES ('82107be8-3754-4a71-a00f-557baccb2b38', 'Sophia', 'Jones', '1234567890', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "profile" ("id", "firstName", "lastName", "phoneNumber", "userId") VALUES ('1701c053-ac8b-40f5-841a-43c913ef4ebc', 'Sophia', 'Johnson', '5555555555', '8ae8cae3-ae2b-4418-88b8-81f4cdc5c2bd');
INSERT INTO "profile" ("id", "firstName", "lastName", "phoneNumber", "userId") VALUES ('add74d67-10cb-46b5-b90f-7ba69049dabe', 'Liam', 'Brown', '3216549870', 'ef0b04cc-78e8-40e5-b37d-85450ed9e9da');
INSERT INTO "profile" ("id", "firstName", "lastName", "phoneNumber", "userId") VALUES ('0afed1b4-1b3f-4650-90ff-4feb14cdb37b', 'Sophia', 'Jones', '3216549870', 'e15596b0-0254-45ca-a610-15063e0fedbb');
INSERT INTO "profile" ("id", "firstName", "lastName", "phoneNumber", "userId") VALUES ('81e86f79-aeaf-42ab-9c1f-3973344e24d7', 'Maria', 'Brown', '1234567890', 'd65932ac-55af-4859-a9a9-c93a65151d06');
INSERT INTO "profile" ("id", "firstName", "lastName", "phoneNumber", "userId") VALUES ('f51c281a-c2ac-4308-b432-2e4993cb097a', 'James', 'Johnson', '5555555555', 'e15596b0-0254-45ca-a610-15063e0fedbb');
INSERT INTO "profile" ("id", "firstName", "lastName", "phoneNumber", "userId") VALUES ('a8b55d1c-a694-4e8c-9cda-96ac84fa33db', 'James', 'Brown', '3216549870', '6fc2ab74-b435-432a-8e9b-3e67da6bd9bf');
INSERT INTO "profile" ("id", "firstName", "lastName", "phoneNumber", "userId") VALUES ('278ec456-5bff-4461-a7ba-d241be9854b6', 'Sophia', 'Smith', '1234567890', 'd65932ac-55af-4859-a9a9-c93a65151d06');

INSERT INTO "category" ("id", "name", "description") VALUES ('c33b3591-cb0a-48d3-9a2b-17ff2910ebeb', 'Fashion', 'All things electronic from gadgets to home appliances.');
INSERT INTO "category" ("id", "name", "description") VALUES ('d678fba3-abe2-40fc-ab8d-ee73908fde55', 'Toys  Games', 'Fun and educational toys for children of all ages.');
INSERT INTO "category" ("id", "name", "description") VALUES ('2715e331-a396-4189-ae7a-72043651c561', 'Toys  Games', 'Everything you need for your home and garden.');
INSERT INTO "category" ("id", "name", "description") VALUES ('cbd3f6de-e308-4163-aceb-85f1ffad08eb', 'Books', 'Latest trends and timeless classics in clothing and accessories.');
INSERT INTO "category" ("id", "name", "description") VALUES ('cc3baa3a-8e78-4f48-8c79-ea94208138a5', 'Books', 'Latest trends and timeless classics in clothing and accessories.');
INSERT INTO "category" ("id", "name", "description") VALUES ('8732697c-4c8e-4472-813a-23e181db1213', 'Electronics', 'Latest trends and timeless classics in clothing and accessories.');
INSERT INTO "category" ("id", "name", "description") VALUES ('65a3bf44-66e1-491a-b6f7-92449d97f871', 'Electronics', 'All things electronic from gadgets to home appliances.');
INSERT INTO "category" ("id", "name", "description") VALUES ('7b156d70-9a30-43fa-8f55-4cb5b36c7d4f', 'Toys  Games', 'All things electronic from gadgets to home appliances.');
INSERT INTO "category" ("id", "name", "description") VALUES ('470ae340-4e82-45bb-a95a-af0b5bf2c67e', 'Fashion', 'All things electronic from gadgets to home appliances.');
INSERT INTO "category" ("id", "name", "description") VALUES ('f51e901c-93d9-44b8-8ee0-5d2527ea3ca3', 'Home  Garden', 'A wide range of literature from fiction to academic texts.');

INSERT INTO "product" ("id", "name", "description", "price", "stockQuantity", "categoryId") VALUES ('f40f5e4b-a80b-40e0-a847-1d7d218af827', 'Gamma Device', 'Innovative gizmo for modern problems.', 947, 646, 'cbd3f6de-e308-4163-aceb-85f1ffad08eb');
INSERT INTO "product" ("id", "name", "description", "price", "stockQuantity", "categoryId") VALUES ('f1f6ba98-d74b-4382-b109-18661b66fb96', 'Epsilon Apparatus', 'Highquality widget for everyday use.', 516, 49, 'c33b3591-cb0a-48d3-9a2b-17ff2910ebeb');
INSERT INTO "product" ("id", "name", "description", "price", "stockQuantity", "categoryId") VALUES ('b2556fd9-25ce-42b3-9a31-5270d57ff192', 'Beta Gizmo', 'Versatile contraption for DIY projects.', 798, 448, 'cbd3f6de-e308-4163-aceb-85f1ffad08eb');
INSERT INTO "product" ("id", "name", "description", "price", "stockQuantity", "categoryId") VALUES ('7891e0a3-7ba2-40b0-9595-9cfe1849fb59', 'Beta Gizmo', 'Versatile contraption for DIY projects.', 999, 809, 'd678fba3-abe2-40fc-ab8d-ee73908fde55');
INSERT INTO "product" ("id", "name", "description", "price", "stockQuantity", "categoryId") VALUES ('05725b3c-4f27-421a-a1e7-2867921dbb7c', 'Delta Contraption', 'Reliable device for professional needs.', 635, 22, 'c33b3591-cb0a-48d3-9a2b-17ff2910ebeb');
INSERT INTO "product" ("id", "name", "description", "price", "stockQuantity", "categoryId") VALUES ('81cc3a6e-f47e-48d0-8104-dac2d9b19108', 'Beta Gizmo', 'Highquality widget for everyday use.', 834, 519, '65a3bf44-66e1-491a-b6f7-92449d97f871');
INSERT INTO "product" ("id", "name", "description", "price", "stockQuantity", "categoryId") VALUES ('ea9a567c-f8a0-4377-85a7-e03c22cc9251', 'Beta Gizmo', 'Advanced apparatus for tech enthusiasts.', 78, 563, 'c33b3591-cb0a-48d3-9a2b-17ff2910ebeb');
INSERT INTO "product" ("id", "name", "description", "price", "stockQuantity", "categoryId") VALUES ('9bf9fa17-1ecc-449a-a84a-4b40c996b796', 'Gamma Device', 'Advanced apparatus for tech enthusiasts.', 331, 765, 'cc3baa3a-8e78-4f48-8c79-ea94208138a5');
INSERT INTO "product" ("id", "name", "description", "price", "stockQuantity", "categoryId") VALUES ('2f90a16d-8313-4fd3-b350-3a6cd7cff2a7', 'Epsilon Apparatus', 'Highquality widget for everyday use.', 678, 284, '65a3bf44-66e1-491a-b6f7-92449d97f871');
INSERT INTO "product" ("id", "name", "description", "price", "stockQuantity", "categoryId") VALUES ('1747d51e-61fa-4221-9f7e-d8f0a8273542', 'Alpha Widget', 'Innovative gizmo for modern problems.', 612, 355, 'f51e901c-93d9-44b8-8ee0-5d2527ea3ca3');

INSERT INTO "cart" ("id", "userId") VALUES ('872206c7-a797-4acb-a840-0f9a44782fb9', 'f4bffe12-23f4-457c-8a57-782e6e2e3de8');
INSERT INTO "cart" ("id", "userId") VALUES ('020db107-55c2-487a-95a8-b89c2d9f0854', 'ef0b04cc-78e8-40e5-b37d-85450ed9e9da');
INSERT INTO "cart" ("id", "userId") VALUES ('781ec9fe-349b-44d7-bd61-448bf2a72e02', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "cart" ("id", "userId") VALUES ('0b2501de-0326-48a5-83b4-6aacc2168148', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "cart" ("id", "userId") VALUES ('53ac17e4-e860-4dc0-b930-5a8da9d9e6dd', 'ef0b04cc-78e8-40e5-b37d-85450ed9e9da');
INSERT INTO "cart" ("id", "userId") VALUES ('1b0e4caa-5b63-4b31-9e9a-cb44aee2ddb8', '6fc2ab74-b435-432a-8e9b-3e67da6bd9bf');
INSERT INTO "cart" ("id", "userId") VALUES ('1a1387b6-9265-42e6-a818-4a16f3833ce0', 'ef0b04cc-78e8-40e5-b37d-85450ed9e9da');
INSERT INTO "cart" ("id", "userId") VALUES ('d29fddb1-f70e-403c-ac7a-c3712bc6f272', 'f4bffe12-23f4-457c-8a57-782e6e2e3de8');
INSERT INTO "cart" ("id", "userId") VALUES ('c87a8e62-ef8c-495e-a2ca-faa506217645', 'f4bffe12-23f4-457c-8a57-782e6e2e3de8');
INSERT INTO "cart" ("id", "userId") VALUES ('c780747d-69ee-4778-b624-a1f383880694', '6fc2ab74-b435-432a-8e9b-3e67da6bd9bf');

INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('2558f20a-876d-478c-8502-331f64ee312d', 141, '53ac17e4-e860-4dc0-b930-5a8da9d9e6dd', '05725b3c-4f27-421a-a1e7-2867921dbb7c');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('d26948b0-0922-4030-91e2-457a346a81c0', 783, '020db107-55c2-487a-95a8-b89c2d9f0854', '7891e0a3-7ba2-40b0-9595-9cfe1849fb59');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('85eeffaf-2d78-407a-b6d4-07f86d79f80a', 711, '1b0e4caa-5b63-4b31-9e9a-cb44aee2ddb8', 'ea9a567c-f8a0-4377-85a7-e03c22cc9251');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('59546209-386b-4943-9d30-5620d3890c46', 448, 'c780747d-69ee-4778-b624-a1f383880694', '9bf9fa17-1ecc-449a-a84a-4b40c996b796');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('befff2eb-875a-4a2b-8d4b-eab54563b8bf', 821, '1b0e4caa-5b63-4b31-9e9a-cb44aee2ddb8', '9bf9fa17-1ecc-449a-a84a-4b40c996b796');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('4592dc74-d0c3-4384-9b18-1bebd9a8fd25', 985, '020db107-55c2-487a-95a8-b89c2d9f0854', '9bf9fa17-1ecc-449a-a84a-4b40c996b796');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('670be011-190f-4bcd-bd16-8fe8472dd9b6', 690, 'd29fddb1-f70e-403c-ac7a-c3712bc6f272', '1747d51e-61fa-4221-9f7e-d8f0a8273542');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('92812a58-48d3-49e5-babe-b71d2581ed4d', 689, '1b0e4caa-5b63-4b31-9e9a-cb44aee2ddb8', '81cc3a6e-f47e-48d0-8104-dac2d9b19108');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('6dd3a5f0-8211-419c-ae6c-09975711454e', 92, '1a1387b6-9265-42e6-a818-4a16f3833ce0', '7891e0a3-7ba2-40b0-9595-9cfe1849fb59');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('0a6bc900-364a-4b5b-a746-d22b34c3d798', 905, '1b0e4caa-5b63-4b31-9e9a-cb44aee2ddb8', '7891e0a3-7ba2-40b0-9595-9cfe1849fb59');

INSERT INTO "order" ("id", "totalPrice", "status", "orderDate", "userId") VALUES ('a021b0a6-e0ba-491e-b005-e3b096370a04', 707, 'completed', '2025-02-06T10:21:33.596Z', '81c1a22d-bbba-4a42-b34d-c69d2e15057d');
INSERT INTO "order" ("id", "totalPrice", "status", "orderDate", "userId") VALUES ('7d53204b-2d1d-4a47-9f7c-c328fe1ef729', 95, 'cancelled', '2024-06-12T17:18:07.900Z', '81c1a22d-bbba-4a42-b34d-c69d2e15057d');
INSERT INTO "order" ("id", "totalPrice", "status", "orderDate", "userId") VALUES ('3cbd3aef-29f5-4149-b8db-9615872851ec', 127, 'shipped', '2024-01-06T23:57:01.202Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "order" ("id", "totalPrice", "status", "orderDate", "userId") VALUES ('f0d66d18-3f51-41de-9ac9-f5277c49c187', 873, 'shipped', '2024-08-09T07:59:35.444Z', '8ae8cae3-ae2b-4418-88b8-81f4cdc5c2bd');
INSERT INTO "order" ("id", "totalPrice", "status", "orderDate", "userId") VALUES ('840321e3-65af-4526-a1b1-e4c80bdc39d6', 272, 'completed', '2024-06-06T22:36:08.435Z', 'e15596b0-0254-45ca-a610-15063e0fedbb');
INSERT INTO "order" ("id", "totalPrice", "status", "orderDate", "userId") VALUES ('442f73a0-5a87-4f36-8658-436574339402', 65, 'pending', '2024-10-20T14:57:31.539Z', '6fc2ab74-b435-432a-8e9b-3e67da6bd9bf');
INSERT INTO "order" ("id", "totalPrice", "status", "orderDate", "userId") VALUES ('53161fa2-f7de-44ba-9fd6-d02607a58659', 309, 'shipped', '2024-12-09T15:44:39.504Z', 'cec0d72c-bba7-4f9f-8185-a7916373a3fd');
INSERT INTO "order" ("id", "totalPrice", "status", "orderDate", "userId") VALUES ('ff093a11-af35-4c89-90d1-1be3ef22e196', 272, 'completed', '2025-01-06T00:05:34.154Z', 'f4bffe12-23f4-457c-8a57-782e6e2e3de8');
INSERT INTO "order" ("id", "totalPrice", "status", "orderDate", "userId") VALUES ('29342a38-8df1-416b-b0be-303e6f0ab500', 524, 'completed', '2023-06-08T16:39:46.045Z', 'e15596b0-0254-45ca-a610-15063e0fedbb');
INSERT INTO "order" ("id", "totalPrice", "status", "orderDate", "userId") VALUES ('68040bf8-7967-4a2c-aa77-539cdd5bb1a4', 4, 'processing', '2023-07-08T00:31:58.519Z', 'e15596b0-0254-45ca-a610-15063e0fedbb');

INSERT INTO "order_item" ("id", "priceAtPurchase", "quantity", "orderId", "productId") VALUES ('69648fc9-3059-4716-a1f9-95d18299f746', 971, 102, 'ff093a11-af35-4c89-90d1-1be3ef22e196', '05725b3c-4f27-421a-a1e7-2867921dbb7c');
INSERT INTO "order_item" ("id", "priceAtPurchase", "quantity", "orderId", "productId") VALUES ('d312f950-be76-4c0e-a83a-9ded6a0122a3', 984, 321, '29342a38-8df1-416b-b0be-303e6f0ab500', '1747d51e-61fa-4221-9f7e-d8f0a8273542');
INSERT INTO "order_item" ("id", "priceAtPurchase", "quantity", "orderId", "productId") VALUES ('b04b801c-af8e-46c7-83f8-3ff81accdda6', 763, 401, 'ff093a11-af35-4c89-90d1-1be3ef22e196', '1747d51e-61fa-4221-9f7e-d8f0a8273542');
INSERT INTO "order_item" ("id", "priceAtPurchase", "quantity", "orderId", "productId") VALUES ('35e4453b-8d33-4ec3-b34b-53f28e15975b', 366, 119, '7d53204b-2d1d-4a47-9f7c-c328fe1ef729', '05725b3c-4f27-421a-a1e7-2867921dbb7c');
INSERT INTO "order_item" ("id", "priceAtPurchase", "quantity", "orderId", "productId") VALUES ('4bb9a6ba-7990-45b4-986e-4ac74bbd5061', 367, 255, 'ff093a11-af35-4c89-90d1-1be3ef22e196', 'b2556fd9-25ce-42b3-9a31-5270d57ff192');
INSERT INTO "order_item" ("id", "priceAtPurchase", "quantity", "orderId", "productId") VALUES ('291aae85-b78c-4a51-b666-859bd9d66ed1', 460, 26, '442f73a0-5a87-4f36-8658-436574339402', 'ea9a567c-f8a0-4377-85a7-e03c22cc9251');
INSERT INTO "order_item" ("id", "priceAtPurchase", "quantity", "orderId", "productId") VALUES ('44fba777-25a6-4f0c-978c-f595a9a7b315', 810, 134, '3cbd3aef-29f5-4149-b8db-9615872851ec', 'b2556fd9-25ce-42b3-9a31-5270d57ff192');
INSERT INTO "order_item" ("id", "priceAtPurchase", "quantity", "orderId", "productId") VALUES ('29bc5710-c004-4a7b-a79d-ac3377634473', 990, 2, '442f73a0-5a87-4f36-8658-436574339402', '1747d51e-61fa-4221-9f7e-d8f0a8273542');
INSERT INTO "order_item" ("id", "priceAtPurchase", "quantity", "orderId", "productId") VALUES ('d9156433-59cc-45e8-81b8-52dd8b2e3fad', 770, 640, '840321e3-65af-4526-a1b1-e4c80bdc39d6', '9bf9fa17-1ecc-449a-a84a-4b40c996b796');
INSERT INTO "order_item" ("id", "priceAtPurchase", "quantity", "orderId", "productId") VALUES ('8740b140-96b4-4c78-b396-7bf0701a595d', 767, 868, '840321e3-65af-4526-a1b1-e4c80bdc39d6', 'b2556fd9-25ce-42b3-9a31-5270d57ff192');

INSERT INTO "address" ("id", "street", "city", "state", "zipCode", "country", "addressType", "userId") VALUES ('8e07eabc-4592-4dd2-a75b-81debb24044b', '101 Maple Drive', 'Springfield', 'Florida', '77889', 'United Kingdom', '356 443 E 6th St, New York, NY 10009', '8ae8cae3-ae2b-4418-88b8-81f4cdc5c2bd');
INSERT INTO "address" ("id", "street", "city", "state", "zipCode", "country", "addressType", "userId") VALUES ('5f5532e4-06d6-4199-8ad2-d3af94778d29', '101 Maple Drive', 'Lakeview', 'Illinois', '44556', 'Australia', '363 18 W 29th St, New York, NY 10001', 'e15596b0-0254-45ca-a610-15063e0fedbb');
INSERT INTO "address" ("id", "street", "city", "state", "zipCode", "country", "addressType", "userId") VALUES ('4b4a2128-9e23-4847-9542-80ad589e445a', '202 Birch Road', 'Lakeview', 'New York', '11223', 'United States', '370 42 E 20th St, New York, NY 10003', '81c1a22d-bbba-4a42-b34d-c69d2e15057d');
INSERT INTO "address" ("id", "street", "city", "state", "zipCode", "country", "addressType", "userId") VALUES ('4017b0eb-b31b-4d82-8ddf-6ac80dccabd1', '456 Oak Avenue', 'Lakeview', 'California', '11223', 'Canada', '377 18 Spring St, New York, NY 10012', 'ef0b04cc-78e8-40e5-b37d-85450ed9e9da');
INSERT INTO "address" ("id", "street", "city", "state", "zipCode", "country", "addressType", "userId") VALUES ('dc539db9-dc27-4ff2-b103-de90b519b418', '123 Elm Street', 'Rivertown', 'Illinois', '12345', 'United States', '384 18 W 29th St, New York, NY 10001', 'f4bffe12-23f4-457c-8a57-782e6e2e3de8');
INSERT INTO "address" ("id", "street", "city", "state", "zipCode", "country", "addressType", "userId") VALUES ('f2f09949-adf3-4f59-8778-835ccd0289de', '789 Pine Lane', 'Hilltop', 'Texas', '77889', 'United States', '391 430 Lafayette St, New York, NY 10003', '81c1a22d-bbba-4a42-b34d-c69d2e15057d');
INSERT INTO "address" ("id", "street", "city", "state", "zipCode", "country", "addressType", "userId") VALUES ('84616dd3-c1f9-4912-bc6c-1acc6295c2f1', '123 Elm Street', 'Rivertown', 'New York', '67890', 'Germany', '398 91 Christopher St, New York, NY 10014', 'f4bffe12-23f4-457c-8a57-782e6e2e3de8');
INSERT INTO "address" ("id", "street", "city", "state", "zipCode", "country", "addressType", "userId") VALUES ('608bbbe5-f614-47dd-a54a-53a07eb03a38', '456 Oak Avenue', 'Hilltop', 'Florida', '77889', 'Australia', '405 91 Christopher St, New York, NY 10014', 'ef0b04cc-78e8-40e5-b37d-85450ed9e9da');
INSERT INTO "address" ("id", "street", "city", "state", "zipCode", "country", "addressType", "userId") VALUES ('9fa2089a-c7df-4a6f-bfac-ac2f427e4e08', '101 Maple Drive', 'Rivertown', 'Illinois', '67890', 'Canada', '412 330 W Broadway, New York, NY 10013', 'ef0b04cc-78e8-40e5-b37d-85450ed9e9da');
INSERT INTO "address" ("id", "street", "city", "state", "zipCode", "country", "addressType", "userId") VALUES ('5f037499-dfef-46a5-a461-44a45a88ab26', '202 Birch Road', 'Rivertown', 'New York', '12345', 'Germany', '419 330 W Broadway, New York, NY 10013', 'cec0d72c-bba7-4f9f-8185-a7916373a3fd');

INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('dcdd4737-9199-4712-bcb5-8e61b6d9bc86', 830, '2023-04-05T09:42:53.895Z', 'Bank Transfer', '68040bf8-7967-4a2c-aa77-539cdd5bb1a4');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('32009f5e-48d9-4167-9f0d-b8333d4e0866', 983, '2024-12-16T15:56:56.435Z', 'Debit Card', '3cbd3aef-29f5-4149-b8db-9615872851ec');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('da0b3502-9bf7-4fdc-b075-7b8c10101f80', 271, '2025-01-30T16:46:27.289Z', 'Credit Card', 'f0d66d18-3f51-41de-9ac9-f5277c49c187');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('2ab27853-2d63-4e3d-810c-515f4ce67421', 792, '2024-12-08T11:55:27.368Z', 'PayPal', 'ff093a11-af35-4c89-90d1-1be3ef22e196');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('2b91655d-20cf-482b-bfb7-5c09c4a3510b', 93, '2024-12-11T15:29:03.791Z', 'PayPal', 'ff093a11-af35-4c89-90d1-1be3ef22e196');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('f55ab29e-6735-41e2-bf9f-f64a600460c2', 984, '2023-08-13T07:35:57.651Z', 'Cash', '3cbd3aef-29f5-4149-b8db-9615872851ec');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('396aaaa5-c723-4b99-9ca3-da0de19d5b5b', 239, '2024-07-23T10:42:04.181Z', 'Debit Card', '840321e3-65af-4526-a1b1-e4c80bdc39d6');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('432361d7-9314-4cdd-b3d6-22ced9488a78', 379, '2023-09-12T15:13:03.558Z', 'Cash', '29342a38-8df1-416b-b0be-303e6f0ab500');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('4783cb07-18e8-41f9-b7f9-cd3ef45c85e3', 130, '2023-05-08T13:50:42.188Z', 'Credit Card', '442f73a0-5a87-4f36-8658-436574339402');
INSERT INTO "payment" ("id", "amount", "paymentDate", "paymentMethod", "orderId") VALUES ('5eb5a341-6833-41e3-b2ea-89eb6f8f496f', 368, '2025-01-15T22:55:09.482Z', 'PayPal', '840321e3-65af-4526-a1b1-e4c80bdc39d6');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
