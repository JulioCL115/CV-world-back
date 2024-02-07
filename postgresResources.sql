INSERT INTO "Users" (id, name, email, password, "phoneNumber", role) VALUES
('aeb1c7d9-9c4f-4dc6-b0e6-6fa19d7845a8', 'John Doe', 'john@example.com', 'password123', '1234567890', 'user'),
('6c84fb90-12c4-11e1-840d-7b25c5ee775a', 'Jane Smith', 'jane@example.com', 'pass123', '9876543210', 'admin'),
('2edfedd9-9b9f-4a7d-8108-64928a410a1a', 'Alice Johnson', 'alice@example.com', 'securepass', '5555555555', 'user');

INSERT INTO "Cvs" (id,"name", "image", "description", "experience", "contact", "study", "applying","UserId")
VALUES (
  '396f57d1-af9a-4295-9490-593439c8ccdf',
  'John Doe CV',
  '[{"first":"john_doe_cv.jpg"}, { "second": "john_doe_cv2.jpg" }]',
  'Experienced software engineer with expertise in web development.',
  '[{"company": "ABC Inc.", "role": "Senior Developer", "years": 5 }, { "company": "ZKH Inc.", "role": "Junior Developer", "years": 2 }]',
  '123456789',
  '["Ingeniería en Informática", "Curso de Desarrollo Web Avanzado"]',
  'Ingeniero',
  'aeb1c7d9-9c4f-4dc6-b0e6-6fa19d7845a8'
);

INSERT INTO "Cvs" (id, "name", "image", "description", "experience", "contact", "study", "applying","UserId")
VALUES (
  '34ac9d67-5172-4bf2-aba3-9cc9269fea73',
  'Jane Smith CV',
  '[{"first":"jane_smith_cv.jpg"}, { "second": "jane_smith_cv2.jpg" }]',
  'Dynamic marketing professional with a track record of successful campaigns.',
  '[{"company": "Marketing Co.", "role": "Marketing Manager", "years": 8 }, { "company": "Marketing Sucks", "role": "Junior Marketer", "years": 3 }]',
  '987654321',
  '["Marketing School", "Advanced Marketing Business School"]',
  'Marketer',
  '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
);

INSERT INTO "Cvs" (id,"name", "image", "description", "experience", "contact", "study", "applying","UserId")
VALUES (
  '10caa732-deb9-4eb4-adb2-7437f5ac37ef',
  'Alice Johnson CV',
  '[{"first":"alice_johnson_cv.jpg"}, { "second": "alice_johnson_cv2.jpg" }]',
  'Dedicated nurse with experience in critical care and patient advocacy.',
  '[{"company": "Hospital XYZ", "role": "Registered Nurse", "years": 10 },{ "company": "Memorial Hospital", "role": "Assistant Nurse", "years": 3 }]',
  '999888777',
  '["Nursing College", "Nursing Massachusetts"]',
  'Nurse',
  '2edfedd9-9b9f-4a7d-8108-64928a410a1a'
);

INSERT INTO "Comments"(id, comment, "CvId", "UserId")
VALUES (
  'd790581d-eec4-4e05-8ad0-3346369a4fd2',
  'good curriculum!',
  '396f57d1-af9a-4295-9490-593439c8ccdf',
  'aeb1c7d9-9c4f-4dc6-b0e6-6fa19d7845a8'
);

INSERT INTO "Comments"(id, comment, "CvId", "UserId")
VALUES (
  '9ad7a96f-09c3-43b9-bab2-b059f9984d4c',
  'good trajectory!',
  '34ac9d67-5172-4bf2-aba3-9cc9269fea73',
  '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
);

INSERT INTO "Comments"(id, comment, "CvId", "UserId")
VALUES (
  'd493f5c9-002e-47af-a817-9db63076eabe',
  'good comment!',
  '10caa732-deb9-4eb4-adb2-7437f5ac37ef',
  '2edfedd9-9b9f-4a7d-8108-64928a410a1a'
);

INSERT INTO "Cvs" (id, name, image, description, experience, contact, study, "UserId") VALUES
('1a7364f0-85a2-4a5d-8a80-4ec52b91ad10', 'John Doe CV', 'john_doe_cv.jpg', 'Experienced software engineer with expertise in web development.', '{"company": "ABC Inc.", "role": "Senior Developer", "years": 5}', 'john@example.com', '{"degree": "Computer Science", "university": "XYZ University", "year": 2010}', 'aeb1c7d9-9c4f-4dc6-b0e6-6fa19d7845a8'),
('8cb8c277-3a12-4ab7-b165-fc177239128e', 'Jane Smith CV', 'jane_smith_cv.jpg', 'Dynamic marketing professional with a track record of successful campaigns.', '{"company": "Marketing Co.", "role": "Marketing Manager", "years": 8}', 'jane@example.com', '{"degree": "Marketing", "university": "Marketing School", "year": 2012}', '6c84fb90-12c4-11e1-840d-7b25c5ee775a'),
('ff339d1a-9865-4e1e-b437-47b4b9c70137', 'Alice Johnson CV', 'alice_johnson_cv.jpg', 'Dedicated nurse with experience in critical care and patient advocacy.', '{"company": "Hospital XYZ", "role": "Registered Nurse", "years": 10}', 'alice@example.com', '{"degree": "Nursing", "university": "Nursing College", "year": 2008}', '2edfedd9-9b9f-4a7d-8108-64928a410a1a');


INSERT INTO "Users" (id, name, email, password, "phonenumber", role) VALUES
('aeb1c7d9-9c4f-4dc6-b0e6-6fa19d7845a8', 'John Doe', 'john@example.com', 'password123', '1234567890', 'user'),
('6c84fb90-12c4-11e1-840d-7b25c5ee775a', 'Jane Smith', 'jane@example.com', 'pass123', '9876543210', 'admin'),
('2edfedd9-9b9f-4a7d-8108-64928a410a1a', 'Alice Johnson', 'alice@example.com', 'securepass', '5555555555', 'user'),
('4eb7f6ab-1c6b-4d3d-a23f-5f76190b7927', 'Michael Brown', 'michael@example.com', 'michaelpass', '1231231234', 'admin'),
('fc1bc407-d292-4982-b564-875b9a171261', 'Emily Wilson', 'emily@example.com', 'emilypass', '4564564567', 'user'),
('61d7ecda-0d4d-43ec-bb48-ff066cda9e47', 'Daniel Johnson', 'daniel@example.com', 'danielpass', '7897897890', 'user'),
('5b7f6f53-ae6c-41ac-9f43-32e70b4e2022', 'Sarah Williams', 'sarah@example.com', 'sarahpass', '0120120123', 'admin'),
('34b4b3cd-92f3-43d1-99c3-07e42636d715', 'Matthew Miller', 'matthew@example.com', 'matthewpass', '9876543210', 'user'),
('2fa5a679-d71f-4c5c-94d4-6cc5daacdf40', 'Jessica Davis', 'jessica@example.com', 'jessicapass', '6543210987', 'admin'),
('f61b15b9-2825-4b79-9318-4e15e9cb9437', 'Christopher Wilson', 'christopher@example.com', 'christopherpass', '3213213210', 'user');

INSERT INTO "Cvs" (id, name, image, description, experience, contact, study, "UserId") VALUES
('1a7364f0-85a2-4a5d-8a80-4ec52b91ad10', 'John Doe CV', 'john_doe_cv.jpg', 'Experienced software engineer with expertise in web development.', '{"company": "ABC Inc.", "role": "Senior Developer", "years": 5}', 'john@example.com', '{"degree": "Computer Science", "university": "XYZ University", "year": 2010}', 'aeb1c7d9-9c4f-4dc6-b0e6-6fa19d7845a8'),
('8cb8c277-3a12-4ab7-b165-fc177239128e', 'Jane Smith CV', 'jane_smith_cv.jpg', 'Dynamic marketing professional with a track record of successful campaigns.', '{"company": "Marketing Co.", "role": "Marketing Manager", "years": 8}', 'jane@example.com', '{"degree": "Marketing", "university": "Marketing School", "year": 2012}', '6c84fb90-12c4-11e1-840d-7b25c5ee775a'),
('ff339d1a-9865-4e1e-b437-47b4b9c70137', 'Alice Johnson CV', 'alice_johnson_cv.jpg', 'Dedicated nurse with experience in critical care and patient advocacy.', '{"company": "Hospital XYZ", "role": "Registered Nurse", "years": 10}', 'alice@example.com', '{"degree": "Nursing", "university": "Nursing College", "year": 2008}', '2edfedd9-9b9f-4a7d-8108-64928a410a1a'),
('4ff7a15d-fd7a-44d2-9d90-0a57d9f8367e', 'Michael Brown CV', 'michael_brown_cv.jpg', 'Seasoned project manager with a proven track record of delivering projects on time and within budget.', '{"company": "Project Management Inc.", "role": "Project Manager", "years": 12}', 'michael@example.com', '{"degree": "Project Management", "university": "Project Management University", "year": 2005}', '4eb7f6ab-1c6b-4d3d-a23f-5f76190b7927'),
('6ed6b8d4-d121-41f7-aad9-0d9d1f4409f5', 'Emily Wilson CV', 'emily_wilson_cv.jpg', 'Creative graphic designer with experience in branding and digital design.', '{"company": "Design Studio", "role": "Graphic Designer", "years": 7}', 'emily@example.com', '{"degree": "Graphic Design", "university": "Art Institute", "year": 2013}', 'fc1bc407-d292-4982-b564-875b9a171261'),
('3b16d221-1b29-4e6e-a4b0-2e6b5ab2df34', 'Daniel Johnson CV', 'daniel_johnson_cv.jpg', 'Skilled financial analyst with expertise in budgeting and forecasting.', '{"company": "Finance Corp.", "role": "Financial Analyst", "years": 6}', 'daniel@example.com', '{"degree": "Finance", "university": "Finance School", "year": 2011}', '61d7ecda-0d4d-43ec-bb48-ff066cda9e47'),
('8f634e82-4807-4b85-9510-1921a40d85e1', 'Sarah Williams CV', 'sarah_williams_cv.jpg', 'Passionate teacher with experience in primary education and curriculum development.', '{"company": "School District", "role": "Teacher", "years": 8}', 'sarah@example.com', '{"degree": "Education", "university": "Teaching College", "year": 2007}', '5b7f6f53-ae6c-41ac-9f43-32e70b4e2022'),
('8a9319b1-8d62-4d59-92fd-f3508e0fb99e', 'Matthew Miller CV', 'matthew_miller_cv.jpg', 'Veteran journalist with a background in investigative reporting and multimedia storytelling.', '{"company": "News Agency", "role": "Journalist", "years": 15}', 'matthew@example.com', '{"degree": "Journalism", "university": "Journalism School", "year": 2003}', '34b4b3cd-92f3-43d1-99c3-07e42636d715'),
('ebc36168-3839-4922-aa5d-9a0e2fc20a43', 'Jessica Davis CV', 'jessica_davis_cv.jpg', 'Experienced HR professional with expertise in talent acquisition and employee relations.', '{"company": "HR Solutions", "role": "HR Manager", "years": 10}', 'jessica@example.com', '{"degree": "Human Resources", "university": "HR College", "year": 2009}', '2fa5a679-d71f-4c5c-94d4-6cc5daacdf40'),
('ec4329d8-cb05-4635-a203-7e04b1a5e3ee', 'Christopher Wilson CV', 'christopher_wilson_cv.jpg', 'Skilled mechanical engineer with experience in product design and manufacturing processes.', '{"company": "Engineering Solutions", "role": "Mechanical Engineer", "years": 8}', 'christopher@example.com', '{"degree": "Mechanical Engineering", "university": "Engineering School", "year": 2010}','f61b15b9-2825-4b79-9318-4e15e9cb9437');
