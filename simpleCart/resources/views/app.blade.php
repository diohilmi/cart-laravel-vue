<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Cart</title>

        

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <style>
            body {
                font-family: 'Nunito', sans-serif;
                color: black;
            }
        </style>

        <link rel="stylesheet" href="{{asset('css/app.css')}}">

        <script src="{{asset('js/app.js')}} " defer></script>

    </head>
    <body>
        <div class="container">
            <div id="app"></div>
        </div>
    </body>
</html>
