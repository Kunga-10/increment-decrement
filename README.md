# increment-decrement
Project for checking the flow of javascript interactive flow

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
    
</head>
<body>
    <div class="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[green] gap-10">
        <div class="text-[red] font-bold">Increment And Decrement</div>
        <div class="flex bg-[red] rounded-sm text-[25px] gap-12 p-3 px-5">
            <button onclick="decrement()"class="border-r-2 pr-5 ">
                <i class="fa-solid fa-minus "></i>
            </button>
            <div id="counter" class="font-bold  ">
                0<!-- innerText will show 0 in the form of 
                    string so convert it into number with parseInt()function-->
            </div>
            <button onclick="increment()" class="border-l-2 pl-5">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    </div>
<script src="https://kit.fontawesome.com/58a810656e.js" crossorigin="anonymous"></script>
<script src="index.js"></script>
</body>
</html>
