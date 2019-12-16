<?php
$vok = ["a","e","i","o","u","ei","au"];
$kon = ["sch","s","m","l","w","r","g","n","p","b","d","t","z","f","st","sp"];
$maxk =  count($kon) - 1;
$maxv =  count($vok) - 1;


?>
<!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <meta charset="utf-8">
     <title></title>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <link href="https://fonts.googleapis.com/css?family=Amaranth|Be+Vietnam|Inder|Livvic|Montserrat+Alternates&display=swap" rel="stylesheet">
      <style media="screen">
        td {
          font-family: 'Montserrat Alternates', sans-serif;
          font-family: 'Amaranth', sans-serif;
          font-family: 'Be Vietnam', sans-serif;
          font-family: 'Livvic', sans-serif;
          /* font-family: 'Inder', sans-serif; */
        }
        td span {
          font-size: 320px;
        }
      </style>
   </head>
   <body>
     <div class="w3-row">
         <table class="w3-table w3-bordered w3-border" >
           <tr>
             <td class="w3-border-right w3-center w3-padding-64 w3-jumbo">
               <span><?= $kon[rand(0,$maxk)]  ?></span>
               <span class="w3-text-green"><?= $vok[rand(0, $maxv)] ?></span>
               <span class="w3-margin-left w3-margin-right">-</span>
               <span><?=  $kon[rand(0,$maxk)] ?></span>
               <span class="w3-text-green"><?= $vok[rand(0, $maxv)] ?></span>
             </td>
           </tr>
         </table>
       </div>
       <div class="w3-row">
         <div class="w3-margin-top w3-container">

         </div>
       </div>

   </body>
 </html>
