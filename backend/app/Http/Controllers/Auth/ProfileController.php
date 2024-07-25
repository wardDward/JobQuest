<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\EmployeerAdditionalInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Models\User;

class ProfileController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'firstname' => ['required', 'max:50'],
            'lastname' => ['required', 'max:50'],
            'company_name' => ['required', 'max:255'],
            'company_logo' => ['nullable', 'mimes:jpg,jpeg,png', 'max:4096'],
            'description' => ['required', 'string'],
            'location' => ['required']
        ]);

        $auth = auth()->user();

        if (!$auth) {
            abort(403, 'Forbidden');
        }

        if ($auth->role === 'employeer') {
            $affected = DB::table('users')
                ->where('id', $auth->id)
                ->update([
                    'firstname' => $data['firstname'],
                    'lastname' => $data['lastname'],
                    'middlename' => $request->middlename,
                    'email_verified_at' => now()
                ]);

            $company_logo = $request->file('company_logo');
            $directory = 'company_logo/' . $auth->id;
            $path = null;

            $employerInfo = EmployeerAdditionalInfo::updateOrCreate(
                ['user_id' => $auth->id],
                [
                    'company_name' => $data['company_name'],
                    'company_logo' => $path,
                    'description' => $data['description'],
                    'location' => $data['location']
                ]
            );

            if (!empty($company_logo)) {
                // Delete previous logo if it exists
                if ($auth->additionalInfo()) {
                    Storage::disk('local')->delete($directory . '/' . $employerInfo->company_logo);
                }

                $name = uniqid() . '.' . $company_logo->extension();
                $path = $company_logo->storeAs($directory, $name, 'local');
                $employerInfo->company_logo = $name;
                $employerInfo->save();
            }

            return response()->json([
                'updated' => $affected,
                'employer_info' => $employerInfo,
                'file_path' => $path
            ]);
        }
    }

    public function seekerProfile(Request $request)
    {


        $auth = auth()->user();

        $data = $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
        ]);


        $affected = DB::table('users')
            ->where('id', $auth->id)
            ->update([
                'firstname' => $data['firstname'],
                'lastname' => $data['lastname'],
                'middlename' => $request->middlename,
            ]);

        return response()->json([
            'updated' => $affected,
            'message' => 'Profle updated successfully'
        ]);
    }
}
