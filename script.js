function runQuery() {
    let query = document.getElementById("query").value.toLowerCase();
    let result = document.getElementById("result");

    if (query.includes("select")) {
        result.innerHTML = "📊 Showing sample data:<br><br>" +
            "ID | Name | Age<br>" +
            "1 | John | 20<br>" +
            "2 | Alice | 22";
    }
    else if (query.includes("insert")) {
        result.innerHTML = "✅ Data inserted successfully (simulated)";
    }
    else if (query.includes("update")) {
        result.innerHTML = "🔄 Data updated successfully (simulated)";
    }
    else if (query.includes("delete")) {
        result.innerHTML = "❌ Data deleted successfully (simulated)";
    }
    else {
        result.innerHTML = "⚠️ Invalid or unsupported query";
    }
}
