<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// 新增 bookables 路由
// Route::get('bookables', function (Request $request){
//     return Bookable::all();
// });

// Route::get('bookables/{id}', function (Request $request, $bookableId) {
//   // dd($bookableId);
//     return Bookable::findOrFail($bookableId);
// });

// 把邏輯放到 controller
// Route::get('bookables','Api\BookableController@index');
// Route::get('bookables/{id}','Api\BookableController@show');

Route::apiResource('bookables','Api\BookableController')->only(['index','show']);