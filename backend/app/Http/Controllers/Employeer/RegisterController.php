<?php

namespace App\Http\Controllers\Employeer;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        try {

            $data = $request->validate([
                'email' => 'required|unique:users,email|email',
                'password' => 'required|min:6'
            ]);

            $user = User::create([
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
                'role' => 'employeer'
            ]);

            Auth::login($user);

            return response()->noContent();
        } catch (\Throwable $e) {
            \Log::error($e);
        }
    }
}
