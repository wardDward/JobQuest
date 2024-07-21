<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|unique:users,email|email',
            'password' => 'required|min:6'
        ]);

        $user = User::create([
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        Auth::login($user);

        if ($user) {
            $user->sendEmailVerificationNotification();
        }


        return response()->noContent();
    }
}
