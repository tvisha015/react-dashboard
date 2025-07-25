import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loginSchema } from "@/users/types/schema";
import { useLoginUserMutation } from "@/store/api/login";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/authSlice"; 
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser , {
    isLoading: loading,
    error: loginErrorResponse,
  }] = useLoginUserMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "john@mail.com",
      password: "changeme",
    },
  });

  const onSubmit = async (formData) => {
  try {
    const response = await loginUser(formData).unwrap();
    dispatch(login(response));
    navigate("/dashboard");
  } catch (error) {
    console.error("Login failed:", error);
    // Handle error, e.g., show a notification or set an error state
  }
};



  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

          {/* Email Field */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input id="email" placeholder="you@example.com" {...field} />
              )}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input id="password" type="password" {...field} />
              )}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Error Message */}
          {loginErrorResponse && <p className="text-red-600 text-sm">{loginErrorResponse}</p>}

          {/* Submit Button */}
          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
