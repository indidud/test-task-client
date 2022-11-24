import { useEffect, useState } from "react";
import { axiosInstance } from "./api";
import { H1, H3, H6, Spinner } from "@blueprintjs/core";
import { Config } from "./types";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [config, setConfig] = useState<Config | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [output, setOutput] = useState<string>("");

  useEffect(() => {
    if (!config) {
      fetchConfig();
    }
  });

  async function fetchConfig() {
    setLoading(true);
    try {
      const cfg = await axiosInstance.get("/config");
      setConfig(cfg.data.config);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleFormSubmit(data: any) {
    setLoading(true);
    try {
      const otp = await axiosInstance.post("/run", data);
      setOutput(otp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      {loading && <Spinner />}
      {!loading && config && (
        <>
          <H1>{config.name}</H1>
          <H3>{config.title}</H3>
          <H6>{config.description}</H6>
          <Form config={config} onSubmit={handleFormSubmit}/>
        </>
      )}
      {!loading && !!output && <span>{output}</span>}
    </div>
  );
}

export default App;
