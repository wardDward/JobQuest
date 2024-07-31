<?php
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResendEmailVerificationController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\AuthenticateController;
use Illuminate\Support\Facades\Route;


// Main application API routes
Route::prefix('seeker')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::post('/login', [AuthenticateController::class, 'store'])->name('login');
        Route::post('/register', [RegisterController::class, 'register'])->name('register');
    });

    Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, 'seekerVerification'])->middleware(['auth:sanctum', 'signed'])->name('verification.verify');

    Route::post('/email/verification-notification', [ResendEmailVerificationController::class, 'store'])->middleware(['auth:sanctum', 'throttle:6,1'])->name('verification.send');

    Route::delete('/logout', [AuthenticateController::class, 'destroy'])->name('logout');

});


// Employer application API routes
Route::prefix('employer')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::post('/login', [AuthenticateController::class, 'store']);
        Route::post('/register', [App\Http\Controllers\Employeer\RegisterController::class, 'register']);
    });

    Route::delete('/logout', [AuthenticateController::class, 'destroy']);

});

