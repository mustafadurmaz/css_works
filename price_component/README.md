# Price Component
## Projenin Amacı

HTML ve CSS kullanarak ücretlendirme compeneti oluşturma

Kazanımlar:
- Label for ile checkbox'ı işaretleme 
    ```sh 
        <input type="checkbox" id="price-switch">
        <label for="price-switch">
          <span>Monthly</span>
          <span>Yearly</span>
        </label>
       
- Pseudo sınıflar ile çoklu işlem yapma
    ```sh
       If the cube is directly inside the container:
       #container:hover > #cube { background-color: yellow; }
       
       If cube is next to (after containers closing tag) the container:
       #container:hover + #cube { background-color: yellow; }
       
       If the cube is somewhere inside the container:
       #container:hover #cube { background-color: yellow; }
       
       If the cube is a sibling of the container:
       #container:hover ~ #cube { background-color: yellow; }

[Live Demo](https://mustafadurmaz.github.io/projects/css/price_component/)

![Uygulama görseli](https://mustafadurmaz.github.io/projects/css/price_component/screen2.png)
