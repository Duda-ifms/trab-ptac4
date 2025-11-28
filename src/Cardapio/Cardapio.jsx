import React from "react";

const Cardapio = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Cardápio </h1>

      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "20px",
        marginTop: "30px",
        flexWrap: "wrap"
      }}>
        
        
        <div style={{ width: "220px", border: "1px solid #ccc", borderRadius: "15px", padding: "10px" }}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Fw8EVfnLqGm1-hH0N0U25ESid0aDmgyT8A&s"
            alt="Bife a milanesa" 
            style={{ width: "100%", borderRadius: "15px" }}
          />
          <h3>Bife a Milanesa</h3>
          <p>bife ao molho milanesa </p>
        </div>

        
        <div style={{ width: "220px", border: "1px solid #ccc", borderRadius: "15px", padding: "10px" }}>
          <img 
            src="https://static.itdg.com.br/images/640-440/a2bf9d7f00b7987438ea4a3b1b420c9e/350392-original.jpg"
            alt="Macarrão ao Molho" 
            style={{ width: "100%", borderRadius: "15px" }}
          />
          <h3>Macarrão ao Molho</h3>
          <p>Macarrão ao molho especial</p>
        </div>

       
        <div style={{ width: "220px", border: "1px solid #ccc", borderRadius: "15px", padding: "10px" }}>
          <img 
            src="https://static.itdg.com.br/images/1200-630/8b4e7db912959c6b4bcae7c58375f4b6/moqueca-de-peixe-e-camarao.jpg"
            alt="Moqueca" 
            style={{ width: "100%", borderRadius: "15px" }}
          />
          <h3>Moqueca</h3>
          <p>Pixe e camarão ao molho </p>
        </div>

      </div>
    </div>
  );
};

export default Cardapio;
