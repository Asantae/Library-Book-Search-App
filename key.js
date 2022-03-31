// google-books api key AIzaSyCdEMmaKOke-OQ3TmC-rMGMdoXS0wATjrQ


API_KEY = 'https://language.googleapis.com/v1/documents:analyzeEntities?key=AIzaSyCdEMmaKOke-OQ3TmC-rMGMdoXS0wATjrQ';







Request:
https://books.google.com/books?jscmd=viewapi&bibkeys=0596000278,00-invalid-isbn,ISBN0765304368,0439554934&callback=ProcessGBSBookInfo

Response:
ProcessGBSBookInfo({
    "0596000278":{
        "bib_key":"0596000278",
        "info_url":"https://books.google.com/books?id=ezqe1hh91q4C&source=gbs_ViewAPI",
        "preview_url":"https://books.google.com/books?id=ezqe1hh91q4C&printsec=frontcover&sig=zSQ5gwlX1NZl_24M86KS8Rbj33Q&source=gbs_ViewAPI",
        "thumbnail_url":"https://books.google.com/books?id=ezqe1hh91q4C&pg=PR3&img=1&zoom=5&sig=bBmzIAIiCtMcM7Ii7TUHycqqEWg",
        "preview":"partial"
    },
    "ISBN0765304368":{
        "bib_key":"ISBN0765304368",
        "info_url":"https://books.google.com/books?id=gfg13CM_kU8C&source=gbs_ViewAPI",
        "preview_url":"https://books.google.com/books?id=gfg13CM_kU8C&printsec=frontcover&sig=jIrSb_SkcQRhy_VvtnKbTXjmvos&source=gbs_ViewAPI",
        "thumbnail_url":"https://books.google.com/books?id=gfg13CM_kU8C&pg=PP1&img=1&zoom=5&sig=LsTwGVAsy_qWYMPM6HVDTPAMokg",
        "preview":"full"
    },
    "0439554934":{
        "bib_key":"0439554934",
        "info_url":"https://books.google.com/books?id=iwiYGwAACAAJ&source=gbs_ViewAPI",
        "preview_url":"https://books.google.com/books?id=iwiYGwAACAAJ&source=gbs_ViewAPI",
        "thumbnail_url":"https://books.google.com/books?id=iwiYGwAACAAJ&printsec=frontcover&img=1&zoom=5&sig=_L6ySKDAs-8gNK28c3NyFdO22ZM",
        "preview":"noview"}
});