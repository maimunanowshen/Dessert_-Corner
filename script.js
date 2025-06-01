const pastries = [
            { name: "Black Forest", image: "https://img.freepik.com/premium-photo/decadent-black-forest-cake-with-layers-chocolate-cherries-cream-white-plate_1174497-110148.jpg?ga=GA1.1.1585122675.1748090603&semt=ais_hybrid&w=740",
                price:150,
            },
            { name: "Chocolate Pastry", image: " https://img.freepik.com/premium-photo/chocolate-cake-with-chocolate-cream-fresh-berries-plate-wooden-table_392895-20808.jpg?ga=GA1.1.1585122675.1748090603&semt=ais_hybrid&w=740",
                price:140,
            },
            { name: "Fruit Cake", image: "https://img.freepik.com/free-photo/fruit-cake-with-black-tea-table_140725-774.jpg?ga=GA1.1.1585122675.1748090603&semt=ais_hybrid&w=740",
                Price:200,
            },
            { name: "Red Velvet", image: "https://img.freepik.com/premium-photo/cake-red-velvet-two-white-plates-two-servings_187096-390.jpg?ga=GA1.1.1585122675.1748090603&semt=ais_hybrid&w=740",
                Price:180,
            },
            { name: "Butter Scotch", image: "https://img.freepik.com/premium-photo/caramel-pecan-cheesecake_1148901-3048.jpg?ga=GA1.1.1585122675.1748090603&semt=ais_hybrid&w=740",
                Price:160,
            },
            { name: "Apple Pie", image: "https://img.freepik.com/free-photo/delicious-apple-pie-composition_23-2149055407.jpg?ga=GA1.1.1585122675.1748090603&semt=ais_hybrid&w=740",
                Price:120,
            },
            { name: "Cheese Cake", image: "https://img.freepik.com/free-photo/delicious-dessert-indoors_23-2151890043.jpg?ga=GA1.1.1585122675.1748090603&semt=ais_hybrid&w=740",
                Price:180,
            },
            { name: "Eclair", image: "https://img.freepik.com/free-photo/eclairs-profiteroles-with-black-chocolate-white-chocolate-with-custard-inside-traditional-french-dessert-top-view_114579-8135.jpg?ga=GA1.1.1585122675.1748090603&semt=ais_hybrid&w=740",
                Price:140,
            },
            { name: "Chocolate mousse", image: "https://img.freepik.com/premium-photo/chocolate-dessert-glass-jars-table-with-stars_79919-323.jpg?ga=GA1.1.1585122675.1748090603&semt=ais_hybrid&w=740",
                Price:120,
            },
            { name:"Blueberry Muffin", image: "https://img.freepik.com/free-photo/view-delicious-muffin_23-2150777673.jpg?ga=GA1.1.1585122675.1748090603&semt=ais_hybrid&w=740",
                Price:90
            }
        ];
   function searchPastries() {
            const searchInput = document.getElementById('searchInput').value.toLowerCase();
            const pastryList = document.getElementById('pastryList');
            pastryList.innerHTML = '';

            const filteredPastries = pastries.filter(pastry => 
                pastry.name.toLowerCase().includes(searchInput)
            );

            if (filteredPastries.length === 0) {
                pastryList.innerHTML = '<p class="no-results">No pastries found.</p>';
                return;
            }

            filteredPastries.forEach(pastry => {
                const pastryCard = document.createElement('div');
                pastryCard.className = 'pastry-card';
                pastryCard.innerHTML = `
                    <img src="${pastry.image}" alt="${pastry.name}">
                    <div class="pastry-content">
                        <h3>${pastry.name}</h3>
                        <p><strong> Price:</strong>${pastry.price}</p>
                        <button onclick="addToOrder('${pastry.name}')">Order</button>
                    </div>
                `;
                pastryList.appendChild(pastryCard);
            });
        }
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchPastries();
            }
        });
  
