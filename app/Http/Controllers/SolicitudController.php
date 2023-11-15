<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SolicitudController extends Controller
{
    public function __construct() {
    }

    public function show()
    {
        return Inertia::render('Solicitud/Index');
    }
}
