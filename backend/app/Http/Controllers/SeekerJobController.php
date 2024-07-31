<?php

namespace App\Http\Controllers;

use App\Http\Resources\JobResource;
use App\Models\JobPost;
use Illuminate\Http\Request;

class SeekerJobController extends Controller
{   
    public function index(Request $request)
    {
        // Define the search parameters and their corresponding query conditions
        $filters = [
            'keyword' => function($query, $value) {
                $query->where(function($q) use ($value) {
                    $q->where('title', 'LIKE', '%' . $value . '%')
                      ->orWhere('description', 'LIKE', '%' . $value . '%');
                });
            },
            'classification' => function($query, $value) {
                $query->where('classification', $value);
            },
            'location' => function($query, $value) {
                $query->where('location', 'LIKE', '%' . $value . '%');
            },
            'job_type' => function($query, $value) {
                $query->where('job_type', $value);
            },
            'salary_from' => function($query, $value) {
                $query->where('salary', '>=', $value);
            },
            'salary_to' => function($query, $value) {
                $query->where('salary', '<=', $value);
            },
            'listed' => function($query, $value) {
                $query->where('listed', $value);
            },
        ];
    
        // Build the query
        $query = JobPost::with(['user', 'applied']);
    
        // Apply the filters dynamically
        foreach ($filters as $param => $condition) {
            if ($request->filled($param)) {
                $condition($query, $request->input($param));
            }
        }
    
        $jobs = $query->paginate(5);
    
        return JobResource::collection($jobs);
    }
    
    public function show($id)
    {
        $job =  JobPost::with(['user'])->where('id', $id)->firstOrFail();

        return new JobResource($job);
    }

}
