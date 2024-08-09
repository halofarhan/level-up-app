
Authentication Endpoints

Login
Endpoint: POST /login
Description: Handles user login.
Controller: userController.handleLogin

Register
Endpoint: POST /register
Description: Handles user registration.
Controller: userController.handleRegister

Google Login
Endpoint: POST /google-login
Description: Handles user login via Google authentication.
Controller: userController.loginGoogle

Authenticated Endpoints

Profile
Endpoint: GET /profile
Description: Retrieves user profile information.
Controller: profileController.readProfile

Update Profile
Endpoint: POST /profile
Description: Updates user profile information.
Controller: profileController.handleProfile

Midtrans Endpoints

Token Midtrans
Endpoint: POST /token-midtrans
Description: Handles token generation for Midtrans integration.
Controller: midtransController.tokenMidtrans

Change Member Status
Endpoint: POST /change-status
Description: Changes user membership status for Midtrans.
Controller: midtransController.changeIsMember

Exercise Endpoints

Read Programs
Endpoint: GET /exercise
Description: Retrieves exercise programs.
Controller: exerciseController.readProgram

Read Program by ID
Endpoint: GET /exercise/:id
Description: Retrieves a specific exercise program by ID.
Controller: exerciseController.readProgramById

Nutrient Endpoints

Next Day Nutrient Update
Endpoint: PUT /next-day
Description: Updates nutrient values for the next day.
Controller: nutrientController.nextDay

Read Nutrient Information
Endpoint: GET /nutrient
Description: Retrieves nutrient information.
Controller: nutrientController.readNutrient

Add Protein
Endpoint: POST /add-protein
Description: Adds protein to the nutrient tracker.
Controller: nutrientController.addProtein

Add Calorie
Endpoint: POST /add-calorie
Description: Adds calorie to the nutrient tracker.
Controller: nutrientController.addCalorie
