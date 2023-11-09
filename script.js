var images = [
    {
      "author": "John Smith",
      "width": 600,
      "height": 700,
      "id": 856,
      "location": "Los Angeles, CA",
      "url": "https://picsum.photos/id/856/600/700"
    },
    {
      "author": "Jane Doe",
      "width": 500,
      "height": 800,
      "id": 742,
      "location": "New York, NY",
      "url": "https://picsum.photos/id/742/500/800"
    },
    {
      "author": "Alice Johnson",
      "width": 800,
      "height": 600,
      "id": 612,
      "location": "Chicago, IL",
      "url": "https://picsum.photos/id/612/800/600"
    },
    {
      "author": "Bob Brown",
      "width": 700,
      "height": 500,
      "id": 527,
      "location": "Houston, TX",
      "url": "https://picsum.photos/id/527/700/500"
    },
    {
      "author": "David Wilson",
      "width": 600,
      "height": 700,
      "id": 123,
      "location": "San Francisco, CA",
      "url": "https://picsum.photos/id/123/600/700"
    },
    {
      "author": "Emily Taylor",
      "width": 500,
      "height": 800,
      "id": 419,
      "location": "Miami, FL",
      "url": "https://picsum.photos/id/419/500/800"
    },
    {
      "author": "Frank Harris",
      "width": 800,
      "height": 600,
      "id": 390,
      "location": "Seattle, WA",
      "url": "https://picsum.photos/id/390/800/600"
    },
    {
      "author": "Grace Hall",
      "width": 700,
      "height": 500,
      "id": 249,
      "location": "Philadelphia, PA",
      "url": "https://picsum.photos/id/249/700/500"
    },
    {
      "author": "Henry Lee",
      "width": 600,
      "height": 700,
      "id": 988,
      "location": "Boston, MA",
      "url": "https://picsum.photos/id/988/600/700"
    },
    {
      "author": "Ivy Turner",
      "width": 500,
      "height": 800,
      "id": 176,
      "location": "Austin, TX",
      "url": "https://picsum.photos/id/176/500/800"
    },
    {
      "author": "Jack Martin",
      "width": 800,
      "height": 600,
      "id": 653,
      "location": "Denver, CO",
      "url": "https://picsum.photos/id/653/800/600"
    },
    {
      "author": "Katherine Adams",
      "width": 700,
      "height": 500,
      "id": 865,
      "location": "Las Vegas, NV",
      "url": "https://picsum.photos/id/865/700/500"
    },
    {
      "author": "Liam Clark",
      "width": 600,
      "height": 700,
      "id": 482,
      "location": "Dallas, TX",
      "url": "https://picsum.photos/id/482/600/700"
    },
    {
      "author": "Mia Lewis",
      "width": 500,
      "height": 800,
      "id": 198,
      "location": "Atlanta, GA",
      "url": "https://picsum.photos/id/198/500/800"
    },
    {
      "author": "Noah Turner",
      "width": 800,
      "height": 600,
      "id": 291,
      "location": "Phoenix, AZ",
      "url": "https://picsum.photos/id/291/800/600"
    },
    {
      "author": "Olivia Parker",
      "width": 700,
      "height": 500,
      "id": 573,
      "location": "San Diego, CA",
      "url": "https://picsum.photos/id/573/700/500"
    },
    {
      "author": "Peter Adams",
      "width": 600,
      "height": 700,
      "id": 724,
      "location": "Chicago, IL",
      "url": "https://picsum.photos/id/724/600/700"
    },
    {
      "author": "Quinn White",
      "width": 500,
      "height": 800,
      "id": 864,
      "location": "Miami, FL",
      "url": "https://picsum.photos/id/864/500/800"
    },
    {
      "author": "Rachel Brown",
      "width": 800,
      "height": 600,
      "id": 637,
      "location": "Los Angeles, CA",
      "url": "https://picsum.photos/id/637/800/600"
    },
    {
      "author": "Samuel Hall",
      "width": 700,
      "height": 500,
      "id": 146,
      "location": "New York, NY",
      "url": "https://picsum.photos/id/146/700/500"
    }
  ]


  $(window).on("load", start);
 

  function start(){
        $(images).each(insert);
        $("#list").DataTable();


        var $grid = $('#gallery').isotope(        // options...
        );
        // layout Isotope after each image loads
        $grid.imagesLoaded().progress( function() {
          $grid.isotope('layout');
        });
  }

  function insert(index, row) {
    $("#list tbody").append(
      "<tr>" +
        "<td>"+row.author+"</td>" +
        "<td>"+row.location+"</td>" +
        "<td>"+row.url+"</td>" +
      "</tr>"
    );

    $("#gallery").append(
      "<a class='w-25' data-featherlight='image' href='"+row.url+"' >\
       <img  class='w-100 border border-5 border-white' src='"+row.url+"'>\
      </a>"
    )
  }
