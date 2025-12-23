import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@//ui/card';
import { Button } from '@//ui/button';
import maxVoltsIcon from '@/assets/max_volts_icon.svg';
import googleGIcon from '@/assets/google_g_logo.svg';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/view-quotes` },
    });
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-[400px] border-2 border-gray-200 shadow-lg">
        <CardHeader className="rounded-t-x">
          <img src={maxVoltsIcon} alt="Max Volts Logo" className="mx-auto h-12" />
          <CardTitle className="text-center text-2xl">Sign In</CardTitle>
        </CardHeader>

        <CardDescription className="px-4 text-center">Welcome to Max Volts Dashboard</CardDescription>

        <CardContent className="space-y-4 px-6 pb-6 pt-4">
          {/* Google Sign In Button */}
          <Button
            className="w-full border-2 border-gray-300 bg-white text-gray-900 font-semibold mt-8 py-5"
            size="lg"
            onClick={handleGoogleSignIn}
            isLoading={isLoading}
          >
            <img src={googleGIcon} alt="Google Icon" className="h-6" />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
