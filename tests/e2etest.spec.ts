import { test, expect } from "@playwright/test";

test("Shopping cart user flow", async ({ page, browser }) => {
  // Go to app
  await page.goto("http://localhost:5173/shopping-cart-react");

  // Go to Registration form
  await page.getByRole("button", { name: "Registrarse" }).click();

  // Register new user
  const registerEmail = page.locator('input[name="login_email"]');
  const registerPassword = page.locator('input[name="login_password"]');

  await expect(registerEmail).toBeVisible();
  await expect(registerEmail).toBeEnabled();
  await registerEmail.fill("hola@hola.com");
  await registerPassword.fill("aaaaaaaaa");

  await page.getByRole("button", { name: "Enviar" }).click();

  // ? Wait for redirect to main page (home)
  await expect(page).toHaveURL("http://localhost:5173/shopping-cart-react");

  // ? Click "Ingresar" and wait for URL change
  await page.getByRole("button", { name: "Ingresar" }).click();
  await expect(page).toHaveURL(/\/login/); // make sure routing is done

  // ? Re-locate the inputs after navigating
  const loginEmail = page.locator('input[name="login_email"]');
  const loginPassword = page.locator('input[name="login_password"]');

  // ? Confirm they are ready
  await expect(loginEmail).toBeVisible();
  await expect(loginPassword).toBeVisible();

  // ? Fill the login form
  await loginEmail.fill("hola@hola.com");
  await loginPassword.fill("aaaaaaaaa");
  await page.getByRole("button", { name: "Enviar" }).click();

  // Add multiple products to cart
  const productsToAdd = [
    "mangaZeref",
    "Classic Comfort Fit Joggers",
    "Classic Comfort Drawstring Joggers",
  ];

  for (const productName of productsToAdd) {
    const heading = page.getByRole("heading", { level: 3, name: productName });

    // Find the closest button after the heading
    const addButton = heading.locator("xpath=following-sibling::button");

    await expect(addButton).toHaveCount(1); // Safety check
    await addButton.click();
  }

  //-------------------------------DEBUG
  // const h3s = await page.locator("h3").allTextContents();
  // console.log("H3 contents:", h3s);

  // Simulate new session/user on new page
  const page1 = await browser.newPage();
  await page1.goto("http://localhost:5173/shopping-cart-react");

  // // Interact with product images
  // await mainSection.locator("label").getByRole("img").first().click();
  // await mainSection.locator("label").getByRole("img").nth(1).click();

  // Login on new page
  await page1.getByRole("button", { name: "Ingresar" }).click();

  const emailInput1 = page1.locator('input[name="login_email"]');
  const passwordInput1 = page1.locator('input[name="login_password"]');

  await expect(emailInput1).toBeVisible();
  await expect(emailInput1).toBeEnabled();
  await emailInput1.fill("hola@hola.com");
  await passwordInput1.fill("aaaaaaaaa");

  await page1.getByRole("button", { name: "Enviar" }).click();

  await expect(page1).toHaveURL("http://localhost:5173/shopping-cart-react");

  await page1.locator('label[for="cartCheckbox"]').click();

  // await page1.getByRole("main").locator("label").click();
  // await page1.getByRole("main").locator("label").nth(1).click();
  // await page1.getByRole("main").locator("label").getByRole("img").click();

  const shoppingCart = await page1.locator(".shoppingCart-container");
  await shoppingCart.waitFor({ state: "visible", timeout: 10000 });
  // console.log(await page1.locator(".shoppingCart-container").innerHTML());
  const allAlts = await shoppingCart
    .locator("img")
    .evaluateAll((imgs) => imgs.map((img) => img.getAttribute("alt")));
  console.log("ALT attributes in cart:", allAlts);

  // console.log(await shoppingCart.locator(`img[alt="mangaZeref"]`));
  await expect(shoppingCart.locator(`img[alt="mangaZeref"]`)).toHaveCount(1, {
    timeout: 10000,
  });
  await expect(
    shoppingCart.locator(`img[alt="Classic Comfort Fit Joggers"]`),
  ).toHaveCount(1, { timeout: 10000 });
  //       - img
  //   `);
  //
  //   await expect(mainSection).toMatchAriaSnapshot(`
  //     - heading "mangaZeref" [level=3]
  //     - button "borrar":
  //       - img
  //   `);
});
