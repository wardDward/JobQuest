<?php

use App\Http\Controllers\ApplyJobController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\Auth\ResumeController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\Employeer\JobController;
use App\Http\Controllers\Employeer\JobPublishController;
use App\Http\Controllers\SeekerJobController;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return new UserResource($request->user());
    });

    Route::apiResource('/job_posts', JobController::class);

    Route::post('/profile', [ProfileController::class, 'store']);
    Route::put('/seeker_profle', [ProfileController::class, 'seekerProfile']);

    Route::apiResource('/jobs', JobController::class);
    Route::apiResource('/resumes', ResumeController::class);
    
    Route::post('/bookmark', [BookmarkController::class, 'store']);
    Route::delete('/bookmark/{job_post_id}', [BookmarkController::class, 'delete']);

    Route::get('/seeker_jobs', [SeekerJobController::class, 'index']);
    Route::get('/view_jobs/{id}', [SeekerJobController::class, 'show']);

    Route::post('/apply_job', [ApplyJobController::class, 'store']);

    Route::put('/job_publication', [JobPublishController::class, 'publication']);

    Route::get('/storage/app/company_logo/{id}/{path}', function ($id, $path) {
        $filePath = "company_logo/{$id}/{$path}";

        // Check if the file exists
        if (!Storage::disk('local')->exists($filePath)) {
            abort(404, 'File not found');
        }

        // Retrieve the file
        $fileContents = Storage::disk('local')->get($filePath);

        return $fileContents;
        // dd($fileContents);
    })->where('path', '.*');





});

