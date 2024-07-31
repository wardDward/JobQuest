<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\ResumeResource;
use App\Http\Resources\UserResource;
use App\Models\Resume;
use Illuminate\Http\Request;

class ResumeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $auth = auth()->user()->id;

        $resume = Resume::where('user_id',$auth)
        ->with('user')
        ->get();
        
        return ResumeResource::collection($resume);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'contact' => ['required' , 'min:11', 'numeric'],
        ]);

        $stored = Resume::create([
            'user_id' => auth()->user()->id,
            'contact' => $request->contact,
            'biography' => $request->biography,
            'additional' => json_encode($request->additional),
            'skills' => json_encode($request->skills),
            'educational_attainment' => json_encode($request->educational_attainment),
            'work_experience' => json_encode($request->work_experience),
            'awards' => json_encode($request->awards),
        ]);
    
        return response()->json([
            'resume' => $stored,
            'message' => "Resume created successfully"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
     
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

}
