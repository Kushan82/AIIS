// investment-server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://kushandave:ULLPtJDn2IFkZHJa@cluster0.ocrevrl.mongodb.net/investmentDB?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err));

// Mongoose schema
const InvestmentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  investmentType: String,
  amountRange: String,
  goals: String,
  createdAt: { type: Date, default: Date.now },
});

const Investment = mongoose.model("Investment", InvestmentSchema);

// POST route
app.post("/api/investment", async (req, res) => {
  try {
    const newEntry = new Investment(req.body);
    const saved = await newEntry.save();

    // Excel setup
    const filePath = path.join(__dirname, "investment_quotes.xlsx");
    const workbook = new ExcelJS.Workbook();
    let worksheet;

    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet("Investments");
    }

    if (!worksheet) {
      worksheet = workbook.addWorksheet("Investments");
      worksheet.columns = [
        { header: 'First Name', key: 'firstName', width: 20 },
        { header: 'Last Name', key: 'lastName', width: 20 },
        { header: 'Email', key: 'email', width: 25 },
        { header: 'Phone', key: 'phone', width: 15 },
        { header: 'Investment Type', key: 'investmentType', width: 25 },
        { header: 'Amount Range', key: 'amountRange', width: 20 },
        { header: 'Goals', key: 'goals', width: 40 },
        { header: 'Submitted At', key: 'createdAt', width: 25 },
      ];
    }

    worksheet.addRow({
      firstName: saved.firstName,
      lastName: saved.lastName,
      email: saved.email,
      phone: saved.phone,
      investmentType: saved.investmentType,
      amountRange: saved.amountRange,
      goals: saved.goals,
      createdAt: saved.createdAt.toISOString(),
    });

    await workbook.xlsx.writeFile(filePath);
    res.status(200).json({ message: "Saved to DB and Excel" });

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Investment server running at http://localhost:${PORT}`);
});
