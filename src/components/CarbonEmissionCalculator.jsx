import React, { useState } from "react";

const CarbonEmissionCalculator = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setError("");

    try {
      console.log('====================================');
      console.log(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      console.log('====================================');
      const response = await fetch(
        `${
          import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
        }/carbon?url=${encodeURIComponent(websiteUrl)}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("======================data=======================");
      console.log(data);

      if (data.error) {
        setError(`Error: ${data.error.message}`);
      } else {
        const carbonEmissions = data.statistics.co2.total;
        setResult(`Carbon Emissions: ${carbonEmissions.toFixed(2)} gCO2`);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Carbon Emission Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="websiteUrl">Website URL:</label>
        <input
          type="url"
          id="websiteUrl"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          required
        />
        <button type="submit">Calculate</button>
      </form>
      {(result && <div id="result">{result}</div>) || <h1>No results yet</h1>}
      {error && <div id="error">{error}</div>}
    </div>
  );
};

export default CarbonEmissionCalculator;
