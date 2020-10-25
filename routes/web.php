<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Can do this in controllers
Route::get('/', function () {
    return view('welcome');
});

Route::get('user', 'Api\UserController@index');
Route::post('user/add', 'Api\UserController@store');
