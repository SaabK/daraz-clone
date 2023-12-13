const express = require("express");
const puppeteer = require("puppeteer");
const router = express.Router();

router.get("/", async (req, res) => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto("https://www.daraz.pk/#hp-just-for-you");

  const products = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll(".card-jfy-item"),
      (card, index) => {
        const scrap = (selector, { type = "textContent" } = {}) => {
          const element = card.querySelector(selector);
          return element ? element[type] : null;
        };

        return {
          image: scrap(".card-jfy-image .image", { type: "src" }),
          title: scrap(".card-jfy-item-desc .card-jfy-title .title"),
          price: {
            current: parseInt(
              scrap(".hp-mod-price-first-line .price")?.replace(/,/g, ""),
              10
            ),
            old: parseInt(
              scrap(".hp-mod-price-second-line .price")?.replace(/,/g, ""),
              10
            ),
          },
          rating: Math.ceil(Math.random() * (5 - 3) + 3),
          comments: scrap(".card-jfy-footer .card-jfy-ratings-comment"),
        };
      }
    );
  });

  await browser.close();
  res.json(products);
});

module.exports = router;
