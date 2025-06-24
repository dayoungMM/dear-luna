import { Link, NavLink } from "react-router";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BellIcon, LogOutIcon, MessageCircleIcon, SettingsIcon, UserIcon } from "lucide-react";

export function Navbar() {
  const isLoggedIn = true; // TODO: Replace with actual auth state
  const hasNotifications = false;
  const hasMessages = false;
  const username = "dearuser";
  const avatar = "https://gravatar.com/avatar/573abe447315f6b0517a2c6adaa12207?size=128";
  const name = "루나";

  return (
    <nav className="flex fixed top-0 left-0 right-0 z-50 h-16 items-center justify-between shadow-md backdrop-blur"
      style={{
        background: "linear-gradient(90deg, #1a1b3a 0%, #2d1b69 50%, #0f0c29 100%)"
      }}
    >
      {/* Logo & Brand */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center font-bold tracking-tighter text-lg gap-2">
          <div className="rounded-full p-2" style={{ background: "linear-gradient(45deg, #ffd700, #ffed4e)", boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)" }}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill="#ffd700" fillOpacity="0.7" />
              <circle cx="21" cy="9" r="8" fill="#ffed4e" fillOpacity="0.7" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight" style={{ color: "#ffd700", textShadow: "0 0 10px rgba(255,215,0,0.5)" }}>DearLuna</span>
        </Link>
        <Separator orientation="vertical" className="h-6 hidden md:block mx-4" style={{ background: "#ffd700", opacity: 0.3 }} />
        <div className="hidden md:flex gap-2">
          <Button asChild variant="ghost" className="border-2 border-[#ffd700] bg-[rgba(255,215,0,0.1)] text-[#ffd700] rounded-2xl text-xs font-bold px-4 py-2 hover:bg-[rgba(255,215,0,0.3)] hover:shadow-gold transition-all">
            <Link to="/write">✨ 편지쓰기</Link>
          </Button>
          <Button asChild variant="ghost" className="border-2 border-[#ffd700] bg-[rgba(255,215,0,0.1)] text-[#ffd700] rounded-2xl text-xs font-bold px-4 py-2 hover:bg-[rgba(255,215,0,0.3)] hover:shadow-gold transition-all">
            <Link to="/mailbox">💰 우편함</Link>
          </Button>
          <Button asChild variant="ghost" className="border-2 border-[#ffd700] bg-[rgba(255,215,0,0.1)] text-[#ffd700] rounded-2xl text-xs font-bold px-4 py-2 hover:bg-[rgba(255,215,0,0.3)] hover:shadow-gold transition-all">
            <Link to="/shop">⭐ 상점</Link>
          </Button>
        </div>
      </div>
      {/* Profile & Actions */}
      {isLoggedIn ? (
        <div className="hidden md:flex items-center gap-4">
          <Button size="icon" variant="ghost" asChild className="relative">
            <Link to="/notifications">
              <BellIcon className="size-5" style={{ color: "#ffd700" }} />
              {hasNotifications && <div className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full" />}
            </Link>
          </Button>
          <Button size="icon" variant="ghost" asChild className="relative">
            <Link to="/messages">
              <MessageCircleIcon className="size-5" style={{ color: "#ffd700" }} />
              {hasMessages && <div className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full" />}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Avatar className="border-2" style={{ borderColor: "#ffd700", background: "linear-gradient(45deg, #667eea, #764ba2)" }}>
                {avatar ? (
                  <AvatarImage className="object-cover" src={avatar} />
                ) : (
                  <AvatarFallback>루</AvatarFallback>
                )}
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                <span className="font-medium">{name}</span>
                <span className="text-xs text-muted-foreground">@{username}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/profile">
                    <UserIcon className="size-4 mr-2" style={{ color: "#ffd700" }} />프로필
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/settings">
                    <SettingsIcon className="size-4 mr-2" style={{ color: "#ffd700" }} />설정
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link to="/logout">
                  <LogOutIcon className="size-4 mr-2" style={{ color: "#ffd700" }} />로그아웃
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="secondary">
            <Link to="/auth/login">로그인</Link>
          </Button>
          <Button asChild>
            <Link to="/auth/join">회원가입</Link>
          </Button>
        </div>
      )}
    </nav>
  );
} 