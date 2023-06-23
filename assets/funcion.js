function updateCuenta() {
  const bebidas = [
    { id: "bebida1", name: "martini", priceId: "precio1" },
    { id: "bebida2", name: "capuccino", priceId: "precio2" },
    { id: "bebida3", name: "latte", priceId: "precio3" },
    { id: "bebida4", name: "mojito", priceId: "precio4" }
  ];

  const comidas = [
    { id: "comida1", name: "insalataDeRiso", priceId: "precio5" },
    { id: "comida2", name: "insalataAiCipollotti", priceId: "precio6" },
    { id: "comida3", name: "insalataCaprese", priceId: "precio7" }
  ];

  const detalleElement = document.getElementById("detalle");
  const detallePrecioElement = document.getElementById("detallePrecio");
  const totalElement = document.getElementById("total");

  let detalle = "";
  let detallePrecio = "";
  let total = 0;

  bebidas.forEach(bebida => {
    const checkbox = document.getElementById(bebida.id);
    if (checkbox.checked) {
      const name = document.getElementById(bebida.name).textContent;
      const price = document.getElementById(bebida.priceId).textContent;
      detalle += `- ${name}<br>`;
      detallePrecio += `- ${price}<br>`;
      total += parseFloat(price.replace("$", ""));
    }
  });

  comidas.forEach(comida => {
    const checkbox = document.getElementById(comida.id);
    if (checkbox.checked) {
      const name = document.getElementById(comida.name).textContent;
      const price = document.getElementById(comida.priceId).textContent;
      detalle += `- ${name}<br>`;
      detallePrecio += `- ${price}<br>`;
      total += parseFloat(price.replace("$", ""));
    }
  });

  detalleElement.innerHTML = detalle;
  detallePrecioElement.innerHTML = detallePrecio;
  totalElement.innerHTML = "$" + total.toFixed(3);
}
