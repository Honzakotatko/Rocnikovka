export const getClanky = async () => {
    const req = await fetch("http://localhost:3000/clanek", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  export const getClanek = async (id) => {
    const req = await fetch(`http://localhost:3000/clanek/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  export const createClanek = async (formData) => { // Definice asynchronní funkce pro vytvoření článku
    const req = await fetch(`http://localhost:3000/clanek`, { // Odeslání požadavku na danou URL
      headers: { // Nastavení hlaviček požadavku
        Accept: "application/json", // Přijetí dat ve formátu JSON
        "Content-Type": "application/json", // Nastavení typu obsahu na JSON
      },
      method: "POST", // Specifikace metody požadavku jako POST
      body: JSON.stringify(formData), // Převedení dat do formátu JSON a jejich vložení do těla požadavku
    });
    const data = await req.json(); // Parsování odpovědi z formátu JSON
    return { // Návratová hodnota funkce
      status: req.status, // Statusový kód HTTP odpovědi
      payload: data.payload, // Data přijatá z odpovědi
      msg: data.msg, // Zpráva z odpovědi
    };
  };
  export const updateClanek = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/clanek/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };
  export const deleteClanek = async (id) => {
    const req = await fetch(`http://localhost:3000/clanek/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg,
    };
  };