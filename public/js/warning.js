let formDelete = document.querySelectorAll('.delete-product');

formDelete.forEach(productDelete => {
    productDelete.addEventListener('submit', (e) => {
        e.preventDefault();
        swal({
            title: "¿Estás seguro?",
            text: "Al eliminar éste producto, no habrá manera de recuperarlo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (!willDelete) {
              swal("Has cancelado eliminar el producto", {
                icon: "success",
              });
            } else {
                productDelete.submit()
            }
          });
    })
})
