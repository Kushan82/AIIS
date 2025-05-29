const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://kushandave:ULLPtJDn2IFkZHJa@cluster0.ocrevrl.mongodb.net/quotesDB?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mongoose Schema
const QuoteSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  insuranceType: String,
  additionalInfo: String,
  createdAt: { type: Date, default: Date.now }
});

const Quote = mongoose.model("Quote", QuoteSchema);

// POST route to handle new quote submissions
app.post("/api/quote", async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    const savedQuote = await newQuote.save();

    const filePath = path.join(__dirname, "quotes.xlsx");
    const workbook = new ExcelJS.Workbook();

    let worksheet;

    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet("Insurance Quotes");

      // 🛠 If worksheet is missing, add it and define columns
      if (!worksheet) {
        worksheet = workbook.addWorksheet("Insurance Quotes");
        worksheet.columns = [
          { header: 'First Name', key: 'firstName', width: 20 },
          { header: 'Last Name', key: 'lastName', width: 20 },
          { header: 'Email', key: 'email', width: 25 },
          { header: 'Phone', key: 'phone', width: 15 },
          { header: 'Insurance Type', key: 'insuranceType', width: 20 },
          { header: 'Additional Info', key: 'additionalInfo', width: 30 },
          { header: 'Submitted At', key: 'createdAt', width: 25 },
        ];
      }

    } else {
      // 🆕 File doesn't exist — create new workbook + worksheet
      worksheet = workbook.addWorksheet("Insurance Quotes");
      worksheet.columns = [
        { header: 'First Name', key: 'firstName', width: 20 },
        { header: 'Last Name', key: 'lastName', width: 20 },
        { header: 'Email', key: 'email', width: 25 },
        { header: 'Phone', key: 'phone', width: 15 },
        { header: 'Insurance Type', key: 'insuranceType', width: 20 },
        { header: 'Additional Info', key: 'additionalInfo', width: 30 },
        { header: 'Submitted At', key: 'createdAt', width: 25 },
      ];
    }

    // ✅ Add the new data row
    worksheet.addRow({
      firstName: savedQuote.firstName,
      lastName: savedQuote.lastName,
      email: savedQuote.email,
      phone: savedQuote.phone,
      insuranceType: savedQuote.insuranceType,
      additionalInfo: savedQuote.additionalInfo,
      createdAt: savedQuote.createdAt.toISOString()
    });

    // 💾 Save workbook
    await workbook.xlsx.writeFile(filePath);
    console.log("Excel updated successfully at:", filePath);

    res.status(200).json({ message: "Quote saved to MongoDB and Excel updated." });

  } catch (err) {
    console.error("Error in /api/quote:", err);
    res.status(500).json({ error: "Failed to save quote" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
