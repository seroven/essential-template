<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SolicitudController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return redirect('/auth');
});
Route::get('/auth', [AuthController::class, 'show'])->name('auth');

Route::get('/solicitud', [SolicitudController::class, 'show'])->name('solicitud.index');


Route::middleware([
    'auth:sanctum',
])->group(function () {

});